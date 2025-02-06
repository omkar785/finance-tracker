import { CardContentt } from "@/components/ui/MyCard";
import PageTitle from "@/components/ui/PageTitle";
import MyCard, { cardprops } from "@/components/ui/MyCard";
import { Banknote, BedDouble, BriefcaseMedical, Building2, ChartCandlestick, CircleDollarSign, Pill, Stethoscope, Trash, UsersRound } from "lucide-react";
import UpComingApp from "@/components/ui/UpComingApp";
import { ViewsPie } from "@/components/ui/ViewsPie";
import FreqDrugs, { drugprops } from "@/components/ui/FreqDrugs";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const cardData: cardprops[] = [
  {
    label: "Total Holdings",
    amount: "$1000000",
    discription: "Total value of all investments",
    icon: CircleDollarSign,
  },
  {
    label: "Real Estate",
    amount: "$10000",
    discription: "Total value of all real estate",
    icon: Building2,
  },
  {
    label: "Stocks",
    amount: "$100000",
    discription: "Total value of all stocks",
    icon: ChartCandlestick,
  },
  {
    label: "Initial Investment",
    amount: "$200000",
    discription: "Total value of all initial investments",
    icon: Banknote,
  }
];

const drugapp: drugprops[] = [
  {
    name: "Some Property",
    content: "Los Angeles",
    quantity: 1000,
    price: "₹3000000"
  },
  {
    name: "Some Other Property",
    content: "Mumbai",
    quantity: 1000,
    price: "₹40000000"
  },
  {
    name: "Some Stock",
    content: "Quantity",
    quantity: 1000,
    price: "₹45000"
  },
  {
    name: "John Doe",
    quantity: 1000,
    price: "₹10000",
    content: ""
  },
];

export interface App {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  return (
    <div className="relative flex flex-col gap-5 w-full">
        {/* <Link href="/advancedAnalytics" className="absolute top-0 right-4 px-4 py-2 rounded bg-gray-200 focus:outline-none">
        Advanced Analytics
        </Link> */}

      <PageTitle title="Portfolio Management" />
      <section className="grid w-full grid-cols-1 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <MyCard
            key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            discription={d.discription}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContentt>
          <p className="p-4 font-bold">Split up between all Holdings</p>
          <ViewsPie />
        </CardContentt>
        <CardContentt className="flex justify-between gap-4">
          <section>
            <p className="font-bold">Highest Returns</p>
          </section>
          {drugapp.map((d, i) => (
            <FreqDrugs
              key={i}
              content={d.content}
              name={d.name}
              quantity={d.quantity}
              price={d.price}
            />
          ))}
        </CardContentt>
      </section>
    </div>
  );
}
