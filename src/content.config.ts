import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory.
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional().default(''),
			// Transform string to Date object
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// 자유 입력. '/'로 구분해 하위 카테고리를 만들 수 있다 (예: '프로젝트/SO101').
			category: z.string().trim().min(1, '카테고리를 입력하세요'),
			tags: z.array(z.string()).optional().default([]),
			// draft 글은 어떤 페이지/RSS/사이트맵에도 노출되지 않는다 (비공개로 남기고 싶은 글용).
			draft: z.boolean().optional().default(false),
			heroImage: z.optional(image()),
		}),
});

export const collections = { posts };
