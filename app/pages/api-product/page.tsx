"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  title: string;
}

function Page() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((res) => {
        if (typeof res.data === "object" && res.data !== null) {
          setData([res.data]);
        } else {
          console.error(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div
          className="flex justify-center items-center flex-col p-4"
          key={d.id}
        >
          <img
            className="w-full rounded-lg shadow-md mb-4"
            src={d.images[0]}
            alt={d.title}
          />
          <h1 className="text-xl font-bold mb-2">{d.title}</h1>
          <p className="text-lg mb-2">{d.description}</p>
          <p className="text-lg font-bold text-blue-500">{d.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
