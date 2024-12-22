import { GraphQLList } from "graphql"
import { CategoryType } from "../types"

const QueryCategoryList = {
  type: new GraphQLList(CategoryType),
  args: {},
  resolve: () => {
    return [] // Category []
  }
}

export {QueryCategoryList}