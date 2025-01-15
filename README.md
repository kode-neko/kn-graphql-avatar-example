# KN GraphQL Avatar Example

---

- [KN GraphQL Avatar Example](#kn-graphql-avatar-example)
  - [🗒️ 1. Description](#️-1-description)
  - [🛠️ 2. Technologies](#️-2-technologies)
  - [⚗️ 3. Testing](#️-3-testing)
  - [🖥️ 4. Deploy](#️-4-deploy)
  - [🗺️ 5. Schema](#️-5-schema)
  - [🚀 6. Future Features](#-6-future-features)
  - [🤝 7. Contributions](#-7-contributions)

---

## 🗒️ 1. Description

Hi! Welcome to my GraphQL example 😀 This app consist on an small back to obtain and build avatars 🙍‍♀️ Each user can have a list of the and customize theirs head, hair, eyes, mouth and clothes. The porpouse is learn how to implement in Node.js a GraphQL service 🕸️🖥️

## 🛠️ 2. Technologies

- Node.js
- [GraphQL official Node.js lib](https://www.npmjs.com/package/graphql)
- [MongoDb official Node.js lib](https://www.npmjs.com/package/mongodb)
- Docker

## ⚗️ 3. Testing

The ```./src/index.ts``` is the entrypoint. You could find a query source where you can modify for testing porpouses. At this moment is the following code. Modify it as your convenience.

```typescript
const source = gql`
  query {
    category(id: "6766a296dc3bc9c115bc5532") {
      name
      colors
    }
  }
`;
```

## 🖥️ 4. Deploy

Firstly, don't forget create & fill ```.env.dev```

```env
PASS_ROOT= // root pass mongo

API_HOST= // not implemented
API_PORT= // not implemented

DB= // database name
DB_HOST= // If you up docker-compose in your PC, the value is 'localhost'
DB_PORT= // The db port as you desire, in the docker-compose file will be maped into 27017
DB_POOL_MIN= // Prepared to create pool conections ina future
DB_POOL= // Prepared to create pool conections ina future
ENV= // For now is no relevant

USER= // CRUD user for this db
USER_ADMIN= // the admin for this db
PASS= // CRUD user pass
PASS_ADMIN= // admin user pass
```

Up docker-compose to set the mongo database

```bash
npm run docker:up
```

Any time you want to stop it, use ```npm run docker:down```

At this moment, it is a testing environment. Building and running are in "watch" mode.

```bash
npm install
npm run build
npm run dev
```

## 🗺️ 5. Schema

The UML diagram is the following

[img]

The app is organize in this way

[img]

If you notice, there is a interface to access a data sotare systems. Anything such as mongo, sql or old school text file system they must be implement the interface. That's a good software practice 😌

## 🚀 6. Future Features

The intention is include some browser client for queriying and mutating. I have been taking a look to [graphiql](https://github.com/graphql/graphiql/?tab=readme-ov-file) lib 

## 🤝 7. Contributions

Welcome to anyone who want to improve this project 👍 I have never worked in collabs projects, but we can stablish some rules 📐 If you are interested contact me, introduce the changes in a new branch and finally we decide to included or not. On the other hand, if you make a fork for personal porpouses, contact me to show the link of that project 😀