import type {PrismaClient} from '.prisma/client'
import {products} from './data'

export async function insertSeedData({prisma}: {prisma: PrismaClient}) {
  console.log(`🌱 Inserting Seed Data: $productss.length} Products`)
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`)

    const {id} = await prisma.productImage.create({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description,
      },
    })
    // @ts-ignore
    delete product.photo
    // WARNING: sad type assertion ahead
    const newProduct = {...product} as Omit<typeof product, 'photo'> & {
      photoId: string
    }
    newProduct.photoId = id
    // const productEntriesWithNoPhotoField = Object.entries(product).filter(
    //   ([key]) => key !== 'photo',
    // )
    // const newProduct = Object.fromEntries(
    //   productEntriesWithNoPhotoField,
    // ) as Omit<typeof product, 'photo'>
    // await prisma.product.create({data: product})
    await prisma.product.create({data: newProduct})
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``,
  )
  process.exit()
}
