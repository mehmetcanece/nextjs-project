import Image from "next/image";
import Link from "next/link";
import GetStarted from "@/components/GetStarted";
import FoodCard from "@/components/FoodCard";
import { useState } from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="motor-img w-10 h-10 bg-gradient-to-r from-rose-800 to-grey">
        <Image
          className="hover:right-0 active:rg cursor-pointer"
          src="/homepage.svg"
          width={40}
          height={100}
          alt="homepage image"
        />
        <h1 className="title-mce italic cursor-pointer">MceFoods</h1>
      </div>

      <div className="homepage-1  bg-gradient-to-r from-rose-800 to-grey">
        <div>
          <h1 className=" font-serif text-center text-5xl font-light italic  ">
            Welcome to MceFoods
          </h1>
          <p className=" font-serif text-center text-s text-rose-800 font-extralight ">
            {" "}
            Order food and get fast and delicious foods in time at the <br></br>{" "}
            MceFoods
          </p>
        </div>
        <Link href="/getstarted">
          <div className="div-btn divider">
            <button className="btn btn-outline btn-wide"> MENU </button>
          </div>
        </Link>
        <div className="homepage-2 "></div>
      </div>
    </main>
  );
}
