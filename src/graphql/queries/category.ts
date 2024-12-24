/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from "graphql"
import { CategoryType } from "../types"
import { ICategoryDbMongo } from "../../data-access/mongo/db"

const category = {
  type: CategoryType,
  args: { id: {type: new GraphQLNonNull(GraphQLID)}},
  resolve: async (_: any, { id }: any) => {
    const catDb = ICategoryDbMongo.getInstance();
    const cat = await catDb.read(id);
    return cat
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