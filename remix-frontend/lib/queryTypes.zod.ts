import {z} from 'zod'

export const ProductQuerySchema = z.object({
  product: z.object({
    id: z.string(),
    name: z.string(),
    skus: z.array(
      z.object({id: z.string(), sku: z.string(), stock: z.number()}),
    ),
    price: z.number(),
    handle: z.string(),
    photos: z.array(
      z.object({
        id: z.string(),
        src: z.string(),
        altText: z.string(),
        optionValue: z.object({
          name: z.string(),
          option: z.object({name: z.string()}),
        }),
      }),
    ),
    status: z.string(),
    options: z.array(
      z.object({
        name: z.string(),
        values: z.array(z.object({name: z.string()})),
      }),
    ),
    category: z.object({name: z.string()}),
    description: z.string(),
    cloudinaryPhotos: z.array(
      z.object({
        id: z.string(),
        image: z.object({publicUrlTransformed: z.string()}),
        altText: z.string(),
        optionValue: z.object({
          name: z.string(),
          option: z.object({name: z.string()}),
        }),
      }),
    ),
  }),
})
