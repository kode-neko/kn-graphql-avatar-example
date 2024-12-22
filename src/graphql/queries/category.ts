import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from "graphql"
import { CategoryType } from "../types"

const category = {
  type: CategoryType,
  args: { id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (_, { category }) => {
    return {} // Category
  }
}

const categoryList = {
  type: new GraphQLList(CategoryType),
  args: {},
  resolve: () => {
    return [] // Category []
  }
}

export {
  category,
  categoryList
}