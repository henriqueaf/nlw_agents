import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../.env.ts';
import { schema } from './schema/index.ts';

export const client = postgres(env.DATABASE_URL, {
  max: 5, // Maximum number of connections in the pool
  idle_timeout: 10,
});

export const db = drizzle(client, {
  schema,
  casing: 'snake_case', // Use snake_case for column names
});
