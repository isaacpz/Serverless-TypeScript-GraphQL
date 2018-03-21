# Serverless Typescript GraphQL Boilerplate

This is a complete, relatively modular implementation of [GraphQL-Yoga](https://github.com/graphcool/graphql-yoga) wrapped by the [Serverless framework](https://serverless.com).

## Features

* Simple local development (with hot reloading, simulated serverless enviroment, etc)
* Extremely simple remote deployment (just 1 command!)
* Automatic type generation for GraphQL schema
* Serverless GraphQL playground to explore schema
* Supports Visual Studio Code debug mode

## How to use

`yarn start` - starts local development server
`yarn debug` - starts local development server in debug mode
`yarn update-schema` - update type definitions after schema.graphql is changed
`yarn deploy` - deploys app to dev staging server
`yarn production-deploy` - deploys app to production

## Stack

* [`GraphQL Yoga`](https://github.com/graphcool/graphql-yoga), which includes:
  * [`express`](https://github.com/expressjs/express)/[`apollo-server`](https://github.com/apollographql/apollo-server): Performant, extensible web server framework
  * [`graphql-subscriptions`](https://github.com/apollographql/graphql-subscriptions)/[`subscriptions-transport-ws`](https://github.com/apollographql/subscriptions-transport-ws): GraphQL subscriptions server
  * [`graphql.js`](https://github.com/graphql/graphql-js)/[`graphql-tools`](https://github.com/apollographql/graphql-tools): GraphQL engine & schema helpers
  * [`graphql-playground`](https://github.com/graphcool/graphql-playground): Interactive GraphQL IDE
* serverless (configured with [`serverless-offline`](https://github.com/dherault/serverless-offline) for local development and [`serverless-typescript`](https://github.com/graphcool/serverless-plugin-typescript) to compile)
* [`AWS Lambda`]
