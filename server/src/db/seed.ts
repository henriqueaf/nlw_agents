import { reset, seed } from 'drizzle-seed';

import { client, db } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema);
await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 3,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum({
          sentencesCount: 2,
        }),
      },
      with: {
        questions: 5,
      },
    },
  };
});

await client.end();

// biome-ignore lint/suspicious/noConsole: only used in development
console.log('Database seeded successfully.');
