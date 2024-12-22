import { GraphQLID, GraphQLNonNull } from "graphql"
import { UserAppType } from "../types"

const QueryUser = {
  type: UserAppType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: (_, { id }) => {
    return {} // User
  }
}
    

export {QueryUser}