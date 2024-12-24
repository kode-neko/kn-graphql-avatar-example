import {
  GraphQLID,
  GraphQLNonNull
} from "graphql"
import { UserAppType } from "../types"

const user = {
  type: UserAppType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: () => {
    return {} // User
  }
}

export {user}