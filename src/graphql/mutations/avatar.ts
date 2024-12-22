import { GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { AvatarType, CustomElementType } from "../types";
import { AvatarInputType, CustomElementInputType } from "../input";

const createAvatar = {
  type: AvatarType,
  args: {
    avatar: {type: new GraphQLNonNull(AvatarInputType)}
  },
  resolve: () => {
    return {} // Avatar
  }
};
const updateAvatar = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    avatar: {type: new GraphQLNonNull(AvatarInputType)}
  },
  resolve: () => {
    return false // Boolean
  }
};
const deleteAvatar = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: () => {
    return false // Boolean
  }
};
const addElementAvatar = {
  type: CustomElementType,
  args: {
    avatarId: {type: new GraphQLNonNull(GraphQLID)},
    element: {type: new GraphQLNonNull(CustomElementInputType)}
  },
  resolve: () => {
    return {} // CustomElement
  }
};
const updateElementAvatar = {
  type: GraphQLBoolean,
  args: {
    avatarId: {type: new GraphQLNonNull(GraphQLID)},
    element: {type: new GraphQLNonNull(CustomElementInputType)}
  },
  resolve: () => {
    return false // Boolean
  }
};
const deleteElementAvatar = {
  type: GraphQLBoolean,
  args: {
    avatarId: { type: new GraphQLNonNull(GraphQLID) },
    nameElement: {type: GraphQLString}
  },
  resolve: () => {
    return false // Boolean
  }
};

export {
  createAvatar,
  updateAvatar,
  deleteAvatar,
  addElementAvatar,
  updateElementAvatar,
  deleteElementAvatar
}