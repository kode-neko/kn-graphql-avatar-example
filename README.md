# KN GraphQL Avatar Example

- [KN GraphQL Avatar Example](#kn-graphql-avatar-example)
  - [1. Description](#1-description)
  - [2. Specs](#2-specs)
  - [3. Instalation](#3-instalation)
  - [4. Testing](#4-testing)
  - [5. Architecture](#5-architecture)
  - [6. Future Features](#6-future-features)
  - [7. Contributions](#7-contributions)

## 1. Description

Hi! Welcome to my GraphQL example. This app consist on an small back to obtain and build avatars. Each user can have a listof the and customize theirs head, hair, eyes, mouth and clothes. The porpouse is learn how to implement in Node.js a GraphQL service. 

## 2. Specs

- node app
- graphql official lib
- mongodb official lib
- docker-compose for deploying db

## 3. Instalation

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

## 4. Testing

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

## 5. Architecture

The UML diagram is the following

img

The app is organize in this way

img

If you notice, there is a interface to access a data sotare systems. Anythins such us monog, sql or old school text file system, they must be implement the interface. That's a good software 

## 6. Future Features

The intention is include some browser client for queriying and mutating. I have been taking a look to (https://github.com/graphql/graphiql/?tab=readme-ov-file)[graphiql] lib 

## 7. Contributions

Everyone welcome! I have never taken part in colab projects, so I don't know how to organize a colab system. At the begining, contact me and I could bring you permissions on a branch. When the improvement is finished we could merge into dev or create a new version. However, if your intention is using the project as a base for new one, I will apreciate a mention 