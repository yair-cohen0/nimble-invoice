import * as process from 'node:process';
import { registerAs } from '@nestjs/config';

export const base = registerAs('', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
}));
