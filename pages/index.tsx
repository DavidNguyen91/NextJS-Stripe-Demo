"use client"
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<section>
<img src="https://cdn2.yamaha-motor.eu/prod/product-assets/2024/YZF600R6RCOMP/2024-Yamaha-YZF600R6RCOMP-EU-Tech_Black-Action-001-03.jpg" ></img>
</section>
      <h1
      style ={{ 
      backgroundColor: "white",
      fontWeight: "bold",
      fontSize:"50px",

      }}>YAMAHA R6</h1>
     
      <a 
      href="https://buy.stripe.com/test_14k7vC6NB9mr8sUaEE"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
      Buy Now
      </a>
    </main>
  );
} 
