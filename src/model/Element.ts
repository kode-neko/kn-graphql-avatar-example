import { Category } from "./Category";

interface Element {
  id?: string;
  name: string;
  pic: string;

  categoryName?: string;
  category?: Category;
}
interface CustomElement {
  id?: string;
  color: string

  selectedElementName?: string;
  selectedElement?: Element,
}

export {
  Element,
  CustomElement
}