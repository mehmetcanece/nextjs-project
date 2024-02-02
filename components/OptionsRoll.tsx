import React, { useState } from "react";
import { Food } from "@/types";

interface OptionsRollProps {
  onCategoryClick: (category: string | null) => void;
}

const OptionsRoll: React.FC<OptionsRollProps> = ({ onCategoryClick }) => {
  const handleCategoryClick = (category: string) => {
    onCategoryClick(category);
  };

  return (
    <div className="flex">
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Burger")}
      >
        Burger
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Pizza")}
      >
        Pizza
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Kebap")}
      >
        Kebap
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Salad")}
      >
        Salad
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Fruit")}
      >
        Fruit
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Dessert")}
      >
        Dessert
      </button>
      <button
        className="btn-2 btn-xl btn-wide text-l font-mono"
        onClick={() => handleCategoryClick("Bevarage")}
      >
        Beverage
      </button>
    </div>
  );
};

export default OptionsRoll;
