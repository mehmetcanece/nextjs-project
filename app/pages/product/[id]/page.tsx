"use client";
import foodData from "@/dummy/foodData";
import { Food } from "@/types";
import { useState } from "react";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const [item, setItem] = useState<Food | null>(null);

  const id = params.id;

  useEffect(() => {
    const fid = foodData.find((element) => element.id == id);
    setItem(fid || null);
    console.log(fid);
  }, [id]);

  return (
    <div>
      {item && (
        <div>
          <img
            className="food-image-2 block w-1/2 mx-auto pt-5"
            style={{ flexDirection: "column" }}
            src={item.image}
            alt={item.name}
          />
          <h3 className="font-mono font-extrabold text-center">{item.name}</h3>
          <p className="font-mono font-extralight text-center">
            {item.ingredients}
          </p>

          <p className="font-mono font-thin text-center"> $ {item.price} </p>
        </div>
      )}
    </div>
  );
}
