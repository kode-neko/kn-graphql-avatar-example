import { GraphQLSchema } from "graphql"
import QueryType from "./queries"
import MutationType from "./mutations"
import {
  AvatarType,
  CategoryType,
  CustomElementType,
  ElementType,
  UserAppType
} from "./types";

const schema = new GraphQLSchema({
  types: [
    AvatarType,
    CategoryType,
    CustomElementType,
    ElementType,
    UserAppType
  ],
  query: QueryType,
  mutation: MutationType
})

export default schema