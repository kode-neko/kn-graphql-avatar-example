import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull
} from "graphql";
import { ElementType } from "../types";
import { ElementInputType } from "../input";

const createElement = {
  type: ElementType,
  args: {
    element: {type: new GraphQLNonNull(ElementInputType)}
  },
  resolve: () => {
    return {} // Element
  }
};
const updateElement = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    element: {type: new GraphQLNonNull(ElementInputType)}
  },
  resolve: () => {
    return false // Boolean
  }
};
const deleteElement = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: () => {
    return false // Boolean
  }
};

export {
  createElement,
  updateElement,
  deleteElement
}