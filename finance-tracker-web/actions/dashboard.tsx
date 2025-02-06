"use server";

import { db } from "@/lib/prims";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction=(obj:any)=>{
    const serialized = { ...obj };

    if(obj.balance){
        serialized.balance=obj.balance.toNumber();
    }
    if(obj.amount){
        serialized.amount=obj.amount.toNumber();
    }
};

export async function createAccount(data:any){
    try{
        const{userId}=await auth();
        if(!userId) throw new Error("Unauthorized");

        const user=await db.user.findUnique({
            where: {clerkUserId: userId},
        });

        const balanceFloat = parseFloat(data.balance);
        if(isNaN(balanceFloat)){
            throw new Error("Invalid balance");
        }

        if (!user) {
            throw new Error("User not found");
        }

        const existingAccounts=await db.account.findMany({
            where: {userId: user.id},
        });

        const shouldBeDefault=existingAccounts.length===0?true:data.isDefault;

        if(shouldBeDefault){
            await db.account.updateMany({
                where: {userId: user.id,isDefault: true},
                data: {isDefault: false},
            })
        }

        const account=await db.account.create({
            data:{
                ...data,
                balance: balanceFloat,
                userId: user.id,
                isDefault:shouldBeDefault,
            },
        });

        const serializedAccount =serializeTransaction(account);

        revalidatePath("/dashboard");
        return{success:true,data:serializedAccount};
    }
    catch(error){
        throw new Error("Unauthorized");
    } 
    
}

export async function getUserAccounts() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    try {
      const accounts = await db.account.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        include: {
          _count: {
            select: {
              transactions: true,
            },
          },
        },
      });
  
      // Serialize accounts before sending to client
      const serializedAccounts = accounts.map(serializeTransaction);
  
      return serializedAccounts;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

