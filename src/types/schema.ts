import { z } from 'zod';

// Base schemas
export const imageSchema = z.object({
  url: z.string().url(),
  alternativeText: z.string().optional(),
  width: z.number(),
  height: z.number(),
});

export const seoSchema = z.object({
  metaTitle: z.string(),
  metaDescription: z.string(),
  keywords: z.array(z.string()).optional(),
});

// Domain schemas
export const destinationSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  region: z.string(),
  coverImage: imageSchema,
  gallery: z.array(imageSchema).optional(),
  seo: seoSchema.optional(),
  featured: z.boolean().default(false),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const dealSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  destination: z.string(),
  departureDate: z.string().datetime(),
  returnDate: z.string().datetime(),
  airline: z.string(),
  featured: z.boolean().default(false),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// Types derived from schemas
export type Image = z.infer<typeof imageSchema>;
export type SEO = z.infer<typeof seoSchema>;
export type Destination = z.infer<typeof destinationSchema>;
export type Deal = z.infer<typeof dealSchema>;
