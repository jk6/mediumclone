import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.DBPORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
