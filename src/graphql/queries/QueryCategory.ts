import { GraphQLID, GraphQLNonNull } from "graphql"
import { CategoryType } from "../types"

const QueryCategory = {
  type: CategoryType,
  args: { id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: (_, { category }) => {
    return {} // Category
  }
}

export {QueryCategory}