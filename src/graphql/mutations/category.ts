import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from "graphql";
import {
  CategoryInputType,
  ElementInputType
} from "../input";
import { CategoryType, ElementType } from "../types";

const createCategory = {
  type: CategoryType,
  args: {category: {type: CategoryInputType}},
  resolve: () => {
    return [{}] // Category []
  }
};
const addElementToCategory = {
  type: ElementType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    element: {type: new GraphQLNonNull(ElementInputType)}
  },
  resolve: () => {
    return {} // Element
  }
};
const updateCategory = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    category: {type: new GraphQLNonNull(CategoryInputType)}
  },
  resolve: () => {
    return false // Boolean
  }
};
const deleteCategory = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: () => {
    return false // Boolean
  }
};

export {
  createCategory,
  addElementToCategory,
  updateCategory,
  deleteCategory
}