import 'dotenv/config'

export default [
  {
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    migrationsRun: true,
    entities: [
      './src/modules/**/infra/typeorm/entities/*.ts'
    ],
    migrations: [
      './src/shared/infra/typeorm/migrations/*.ts'
    ],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations'
    }
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './src/modules/**/infra/typeorm/schemas/*.ts'
    ]
  }
]