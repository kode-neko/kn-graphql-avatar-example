import { CustomElement } from "./Element";

interface Avatar {
  id?: string;
  name: string;

  // What Category?
  hat?: CustomElement;
  hair?: CustomElement;
  eyes?: CustomElement;
  mouth?: CustomElement;
  clothes?: CustomElement;
}

export {
  Avatar
}