interface Element {
  id?: string;
  name: string;
  pic: string;

  categoryName?: string;
}
interface CustomElement {
  id?: string;
  selected?: Element,
  color: string
}

export {
  Element,
  CustomElement
}