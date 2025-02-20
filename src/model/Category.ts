import { Element } from "./Element";

interface Category {
  id?: string;
  name: string;
  colors: string[];

  elementList: Element[];
}

export {
  Category
}