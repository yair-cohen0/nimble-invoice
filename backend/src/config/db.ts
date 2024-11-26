import * as process from 'node:process';
import { registerAs } from '@nestjs/config';

export const db = registerAs('db', () => ({
  host: process.env.DB_HOST || 'host',
  port: process.env.DB_PORT || 20679,
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'defaultdb',
}));
