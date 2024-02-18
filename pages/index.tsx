"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import PricingCard from "./components/PricingCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

<div className="mx-auto max-w-4xl text-center mt-10 items-center">
              <h2 className="text-4xl font-semibold leading-7 text-[#eb1e1e]">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose the right course for you!</p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Check out all the information below</p>
         </div>
      <PricingCard></PricingCard>
     
     
    </main>
  );
} 
