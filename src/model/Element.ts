import { Category } from "./Category";

interface Element {
  id?: string;
  name: string;
  pic: string;

  category?: Category;
}
interface CustomElement {
  selected?: Element,
  color: string
}

export {
  Element,
  CustomElement
}