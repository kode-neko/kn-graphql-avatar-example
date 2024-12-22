import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputType,
  GraphQLInputObjectType,
  GraphQLBoolean
} from 'graphql';


// Schema

const ElementType = new GraphQLObjectType({
  name: 'Element',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    pic: { type: new GraphQLNonNull(GraphQLString) },
    categoryName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    colors: { type: new GraphQLList(GraphQLString) },

    elementList: { type: new GraphQLList(ElementType) }
  }
});

const CustomElementType = new GraphQLObjectType({
  name: 'CustomElement',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    selected: { type: ElementType },
    color: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const AvatarType = new GraphQLObjectType({
  name: 'Avatar',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },

    hat: { type: CustomElementType },
    hair: { type: CustomElementType },
    eyes: { type: CustomElementType },
    mouth: { type: CustomElementType },
    clothes: { type: CustomElementType }
  }
});

const UserAppType = new GraphQLObjectType({
  name: 'UserApp',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    userName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString)  },
    avatarList: { type: new GraphQLList(AvatarType) }
  }
});


// Queries

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    category: {
      type: CategoryType,
      args: { id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (_, { category }) => {
        return {} // Category
      }
    },
    categoryList: {
      type: new GraphQLList(CategoryType),
      args: {},
      resolve: () => {
        return [] // Category []
      }
    },
    user: {
      type: UserAppType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, { id }) => {
        return {} // User
      }
    },
  }
});


// Input Type

const ElementInputType = new GraphQLInputObjectType({
  name: 'ElementInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    pic: { type: new GraphQLNonNull(GraphQLString) }
  },
});

const CategoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    colors: { type: new GraphQLList(GraphQLString) },
    elementList: { type: new GraphQLList(ElementInputType) }
  },
});

const CustomElementInputType = new GraphQLInputObjectType({
  name: 'CustomElementInput',
  fields: {
    selected: { type: new GraphQLNonNull(GraphQLID) },
    color: { type: new GraphQLNonNull(GraphQLString) }
  },
});

const AvatarInputType = new GraphQLInputObjectType({
  name: 'AvatarInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },

    hat: { type: new GraphQLNonNull(CustomElementInputType) },
    hair: { type: new GraphQLNonNull(CustomElementInputType) },
    eyes: { type: new GraphQLNonNull(CustomElementInputType) },
    mouth: { type: new GraphQLNonNull(CustomElementInputType) },
    clothes: { type: new GraphQLNonNull(CustomElementInputType) }
  },
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    userName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString)  }
  },
});


// Mutation

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    // Category
    createCategory: {
      type: CategoryType,
      args: {category: {type: CategoryInputType}},
      resolve: () => {
        return [{}] // Category []
      }
    },
    addElementToCategory: {
      type: ElementType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        element: {type: new GraphQLNonNull(ElementInputType)}
      },
      resolve: () => {
        return {} // Element
      }
    },
    updateCategory: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        category: {type: new GraphQLNonNull(CategoryInputType)}
      },
      resolve: () => {
        return false // Boolean
      }
    },
    deleteCategory: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: () => {
        return false // Boolean
      }
    },

    // Element
    createElement: {
      type: ElementType,
      args: {
        element: {type: new GraphQLNonNull(ElementInputType)}
      },
      resolve: () => {
        return {} // Element
      }
    },
    updateElement: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        element: {type: new GraphQLNonNull(ElementInputType)}
      },
      resolve: () => {
        return false // Boolean
      }
    },
    deleteElement: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: () => {
        return false // Boolean
      }
    },

    // Avatar
    createAvatar: {
      type: AvatarType,
      args: {
        avatar: {type: new GraphQLNonNull(AvatarInputType)}
      },
      resolve: () => {
        return {} // Avatar
      }
    },
    updateAvatar: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        avatar: {type: new GraphQLNonNull(AvatarInputType)}
      },
      resolve: () => {
        return false // Boolean
      }
    },
    deleteAvatar: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: () => {
        return false // Boolean
      }
    },
    addElementAvatar: {
      type: CustomElementType,
      args: {
        avatarId: {type: new GraphQLNonNull(GraphQLID)},
        element: {type: new GraphQLNonNull(CustomElementInputType)}
      },
      resolve: () => {
        return {} // CustomElement
      }
    },
    updateElementAvatar: {
      type: GraphQLBoolean,
      args: {
        avatarId: {type: new GraphQLNonNull(GraphQLID)},
        element: {type: new GraphQLNonNull(CustomElementInputType)}
      },
      resolve: () => {
        return false // Boolean
      }
    },
    deleteElementAvatar: {
      type: GraphQLBoolean,
      args: {
        avatarId: { type: new GraphQLNonNull(GraphQLID) },
        nameElement: {type: GraphQLString}
      },
      resolve: () => {
        return false // Boolean
      }
    },

    // User
    createUser: {
      type: UserAppType,
      args: {
        user: { type: new GraphQLNonNull(UserInputType) }
      },
      resolve: () => {
        return {} // User
      }
    },
    updateUser: {
      type: GraphQLBoolean,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID)},
        user: { type: new GraphQLNonNull(UserInputType) }
      },
      resolve: () => {
        return false // Boolean
      }
    },
    deleteUser: {
      type: GraphQLBoolean,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: () => {
        return false // Boolean
      }
    }
  }
})


// Schema

const schema = new GraphQLObjectType({
  query: QueryType,
  mutation: MutationType
})

export default schema