import React from "react";
import { Food } from "@/types";
import foodData from "@/dummy/foodData";

const FoodCard = () => {
  return (
    <div>
      {foodData.map((food: Food) => (
        <div
          key={food.name}
          className="food-component flex-col items-center cursor-pointer h-80 w-60 bg-slate-100 hover: shadow-2xl hover:shadow-black"
        >
          <div className="text-center">
            <div>
              <img className="food-image" src={food.image} alt={food.name} />
            </div>

            <div className="text-center">
              <p className="food-name">{food.name}</p>
              <a className="food-desc text-center">{food.description}</a>
              <h1 className="food-price">${food.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
