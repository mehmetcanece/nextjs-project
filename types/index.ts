import { MouseEventHandler } from "react";

export interface Food {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
  ingredients: string;
}
