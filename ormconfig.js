import 'dotenv/config'

export default [
  {
    name: 'default',
    type: 'postgres',
    port: '5432',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_NAME,
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