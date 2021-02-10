# About the project

This API provides resources for dental technicians to organize the orders received from dentists

The techinician can create orders, set a due date and link a doctor and patient to the order

It also issues a notification for orders that will expire on the same day set in the due date

## Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [Node Cron](https://github.com/node-cron/node-cron)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
> [Docker](https://www.docker.com/) (Optional)

**Clone the project**
```
git clone https://github.com/zaccaron07/dental-work-flow-control-api.git
```

**Follow the steps**

```
# Install the dependencies
yarn

# Make a copy of '.env.example' to '.env' and set it with your environment variables

# Using docker:
# Create an instance of postgreSQL
docker run --name dental-work-flow-control-postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=dentalworkflowcontrol -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create an instance of mongoDB
docker run --name dental-work-flow-control-mongodb -p 27017:27017 -d mongo

# Create an instance of redis
docker run --name dental-work-flow-control-redis -p 6379:6379 -d redis:alpine

# Run the migrations
yarn typeorm migration:run

# Run the API
yarn dev
```

** Open in Insomnia**
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Dental%20Work%20Flow%20Control%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fzaccaron07%2Fdental-work-flow-control-api%2Fmain%2FInsomnia_Dental_API.json)

## To-do

The API is functional, but there is always room for improvement and new features, for example:
- Add the materials used in each order
- Monthly/weekly earnings reports
- Rate limiter
