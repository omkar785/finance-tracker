import { CardContentt } from "@/components/ui/MyCard";
import PageTitle from "@/components/ui/PageTitle";
import MyCard, { cardprops } from "@/components/ui/MyCard";
import { Banknote, BedDouble, BriefcaseMedical, CircleDollarSign, Pill, Stethoscope, Trash, UsersRound } from "lucide-react";
import UpComingApp from "@/components/ui/UpComingApp";
import { ViewsPie } from "@/components/ui/ViewsPie";
import { AvgTurn } from "@/components/ui/AvgTurn";
import FreqDrugs, { drugprops } from "@/components/ui/FreqDrugs";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { StockOut } from "@/components/ui/StockOut";
import { InvReorder } from "@/components/ui/InvReorder";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export interface App {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  return (
    <div className="relative flex flex-col gap-5 w-full">
        <PageTitle title="Advanced Analytics" />
        <section>
        {/* <Card>
  <CardHeader>
    <CardTitle className="font-bold">Outbreak Detection</CardTitle>
    <CardDescription>Predictions based on DTC model regarding Disease Outbreak based on medicine Inventory flow.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="font-semibold">     outbreak was detected based on inventory flow and local hospitals</p>
  </CardContent>
  <CardFooter>
    <p>Notified Central and State Government.</p>
  </CardFooter>
</Card> */}

        </section>
        <section className="grid grid-cols-4 gap-4 transition-all lg:grid-cols-3">
        <CardContentt>
          <p className="p-4 font-bold">Average Inventory Turnover Rate</p>
          <AvgTurn />
        </CardContentt>

        <CardContentt>
          <p className="p-4 font-bold">Stock Out Frequency</p>
          <StockOut />
        </CardContentt> 
        <CardContentt>
          <p className="p-4 font-bold">Inventory Reorder</p>
          <InvReorder />
        </CardContentt>      
        </section>
        <section className="grid grid-cols-4 gap-4 transition-all lg:grid-cols-3">
        <CardContentt>
          <p className="p-4 font-bold">Average Inventory Turnover Rate</p>
          <AvgTurn />
        </CardContentt>

        <CardContentt>
          <p className="p-4 font-bold">Stock Out Frequency</p>
          <StockOut />
        </CardContentt> 
        <CardContentt>
          <p className="p-4 font-bold">Inventory Reorder</p>
          <InvReorder />
        </CardContentt>      
        </section>
      </div>
  );
}
