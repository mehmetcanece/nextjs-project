import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.log("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="http://localhost:3000" underline="hover" color="inherit">
          Homepage
        </Link>
        <Link underline="hover" color="black" href="/pages/getstarted">
          Menu
        </Link>
      </Breadcrumbs>
    </div>
  );
}
