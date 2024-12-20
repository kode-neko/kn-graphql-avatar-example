import { Category } from "./Category";

interface Avatar {
  id?: string;
  name: string;

  // What Category?
  hair: Category;
  hat: Category;
  eyes: Category;
  mouth: Category;
  clothes: Category;
}

export {
  Avatar
}