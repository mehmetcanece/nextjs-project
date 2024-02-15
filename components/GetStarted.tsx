"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import OptionsRoll from "@/components/OptionsRoll";
import { Food } from "@/types";
import foodData from "@/dummy/foodData";
import { Button, Typography } from "@mui/material";
import { useMemo } from "react";
import Link from "next/link";

const Page = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleCategoryClick = (type: string | null) => {
    setSelectedType(type);
  };

  const filteredFoodData = useMemo(() => {
    return foodData.filter((food: Food) => food.type === selectedType && !null);
  }, [selectedType]);

  useEffect(() => {
    filteredFoodData.filter(
      (food: Food) => food.type === selectedType && !null
    );
  }, [selectedType]);

  return (
    <div>
      <Typography
        variant="h1"
        className="find-food font-serif text-center text-3xl font-light italic"
      >
        Enjoy the Quality Food with <br></br> MceFoods
      </Typography>

      <div className="overflow-x-auto">
        <OptionsRoll onCategoryClick={handleCategoryClick} />
      </div>
      <div className="flex over overflow-x-auto flex-row">
        <div className="items over overflow-x-auto flex-row">
          {filteredFoodData.map((food: Food) => (
            <div
              key={food.name}
              className="food-component flex-col items-center cursor-pointer h-80 w-60 bg-slate-100 hover: shadow-2xl hover:shadow-black"
            >
              <Link href={`/pages/product/${food.id}`} passHref>
                <div className="text-center">
                  <div>
                    <img
                      className="food-image"
                      src={food.image}
                      alt={food.name}
                    />
                  </div>

                  <div className="text-center">
                    <p className="food-name">{food.name}</p>
                    <a className="food-desc text-center  ">
                      {food.description}
                    </a>
                    <h1 className="food-price">${food.price}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="homepage-2">
        <div className="div-btn-2 divider">
          <Link href="/pages/rate-us">
            <Button
              color="error"
              onClick={() => {
                console.log("Added to Card");
              }}
              className="btn-2 btn-xl btn-wide text-l font-mono"
            >
              Rate Us!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
