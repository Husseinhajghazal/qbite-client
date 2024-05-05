import { Meal } from "./Meal";

export interface FilterState {
  show: boolean;
  priceRange: number[];
  minRate: 1 | 2 | 3 | 4 | 5;
  alphabeticalOrder: "A-Z" | "Z-A";
  priceOrder: "h" | "l";
  dateOrder: "n" | "o";
  category: string;
  initialFoods: Meal[];
  foods: Meal[];
}
