import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: baseSchema,
});

const tutoriales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutoriales' }),
  schema: baseSchema.extend({
    nivel: z.enum(['basico', 'intermedio', 'avanzado']).default('basico'),
  }),
});

const curso = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/curso' }),
  schema: baseSchema.extend({
    orden: z.number(),
    modulo: z.string(),
  }),
});

export const collections = { noticias, tutoriales, curso };
