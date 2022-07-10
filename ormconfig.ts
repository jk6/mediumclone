import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.DBPORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
