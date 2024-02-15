"use client";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import BreadCrumb from "@/components/BreadCrumb";

const Page = () => {
  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);

  const handleOptionSelected = (foodId: string) => {
    setSelectedFoodId(foodId);
  };

  return (
    <div>
      <BreadCrumb />
      <div className="search-div">
        <SearchBar onOptionSelected={handleOptionSelected} />
        {selectedFoodId && (
          <Link href={`/pages/product/${selectedFoodId}`} passHref>
            <SearchIcon className="search-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
