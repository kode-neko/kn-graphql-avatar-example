import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { AvatarType } from "./AvatarType";

const UserAppType = new GraphQLObjectType({
  name: 'UserApp',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    userName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString)  },
    avatarList: { type: new GraphQLList(AvatarType) }
  }
});

export { UserAppType }