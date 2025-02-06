"use client"
import { CardContentt } from "@/components/ui/MyCard";
import appprops from "@/components/ui/UpComingApp";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

 
import * as React from "react"
import { format } from "date-fns"
import { BadgeDollarSign, Calendar as CalendarIcon, Coins, CoinsIcon, HandCoins, Wallet } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface appprops {
  name: string;
  email: string;
  time: string;
}

import { Views } from "@/components/ui/views";
import PageTitle from "@/components/ui/PageTitle";
import MyCard, { cardprops } from "@/components/ui/MyCard";
import { BedDouble,  BriefcaseMedical, Plus, Stethoscope, UsersRound } from "lucide-react";
import UpComingApp from "@/components/ui/UpComingApp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cardData:cardprops[]=[
  {
    label:"Total Budget",
    amount:"$100,000",
    discription:"Total budget for the month",
    icon: Wallet,

  },
  {
    label:"Amount Spent",
    amount:"$50,000",
    discription:"Total amount spent this month",
    icon: CoinsIcon,
  },
  {
    label:"Budget Remaining",
    amount:"$50,000",
    discription:"Total budget remaining for the month",
    icon: HandCoins,
  },
  {
    label:"Total Savings",
    amount:"$10,000",
    discription:"Total savings for the month",
    icon: BadgeDollarSign,
  }
];

const comingApp:appprops[]=[
  {
    name:"John Doe",
    email:"john.doe@gmail.com",
    time:"$1000"
  },
  {
    name:"Joh Doe",
    email:"joh.doe@gmail.com",
    time:"$2000"
  },
  {
    name:"Jon Doe",
    email:"jon.doe@gmail.com",
    time:"$3000"
  },
  {
    name:"Jhn Doe",
    time:"$4000",
    email:"john.dddd@gmail.com"
  },
  
];

export interface App {
  id: number;
  name: string;
  email: string;

}

export default async function Home() {
  const [date, setDate] = React.useState<Date>()
    return (
      <div className="flex flex-col gap-5 w-full">
        <h1>Finance-Tracker</h1>
        <Link href="/advancedAnalytics" className="absolute top-21 right-6 px-4 py-2 rounded bg-slate-400 text-black focus:outline-none">
        Advanced Analytics
        </Link>
        <section className="grid w-full grid-cols-1 gap-x-8 transition-all
        sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((d,i) => (
            <MyCard key={i} label={d.label} icon={d.icon} amount={d.amount} discription={d.discription} />
          ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContentt>
            <p className="p-4 font-bold">
              Overview
            </p>
            <Views />
          </CardContentt>
          <CardContentt className="flex justify-between gap-4">
            <section>
              <div className="flex gap-4 items-center ">

            <p className="font-bold text-center">Upcoming Payments</p>
            <AlertDialog>
            <AlertDialogTrigger className="bg-gray-600 rounded "><Plus/></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Add Payment</AlertDialogTitle>
                <AlertDialogDescription>
                <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Name</Label>
      <Input type="name" id="name" placeholder="Name" />
      <Label htmlFor="email" >Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          />
      </PopoverContent>
    </Popover>
          </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
              </div>
            <p className="text-sm text-gray-400">
              20 Payments Due Today
            </p>
            </section>
            
            {comingApp.map((d,i) => (
                <UpComingApp key={i}
                email={d.email}
                name={d.name}
                time={d.time}/>
            ))}
            
          </CardContentt>

        </section>
      </div>
    );
  }


