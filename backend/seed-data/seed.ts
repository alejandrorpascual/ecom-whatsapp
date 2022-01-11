import type {PrismaClient} from '.prisma/client'
import {products} from './t-shirt.data'

export async function insertSeedData({prisma}: {prisma: PrismaClient}) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`)
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`)

    // const {id} = await prisma.productImage.createMany({
    //   data: {
    //     image: JSON.stringify(product.photo),
    //     altText: product.description,
    //   },
    // })
    const {id} = await prisma.productImage.createMany({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description,
      },
    })
    delete product.photo
    // WARNING: sad type assertion ahead
    const newProduct = {...product} as Omit<typeof product, 'photo'> & {
      photoId: string
    }
    newProduct.photoId = id
    await prisma.product.create({data: newProduct})
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``,
  )
  process.exit()
}
