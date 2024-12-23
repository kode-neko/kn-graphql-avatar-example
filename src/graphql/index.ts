import { GraphQLSchema } from "graphql"
import QueryType from "./queries"
import MutationType from "./mutations"

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

export default schema