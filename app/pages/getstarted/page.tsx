"use client";
import React from "react";
import GetStarted from "@/components/GetStarted";
import BreadCrumbs from "@/components/BreadCrumb";

const page = () => {
  return (
    <div>
      <BreadCrumbs></BreadCrumbs>
      <GetStarted></GetStarted>
    </div>
  );
};

export default page;
