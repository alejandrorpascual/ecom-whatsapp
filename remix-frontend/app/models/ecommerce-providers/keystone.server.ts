import {Gql, OrderDirection} from '../../../graphql-zeus/zeus'
import formatPrice from '../../../lib/formatPrice'
import {ProductQuerySchema} from '../../../lib/queryTypes.zod'
import type {
  EcommerceProvider,
  Product,
  ProductOption,
} from '../ecommerce-provider.server'
import type {RequestResponseCache} from '../request-response-cache.server'

export interface ProviderOptions {
  cache?: RequestResponseCache
  maxAgeSeconds?: number | ((request: Request) => number)
  shop: string
  storefrontAccessToken: string
}

export function createShopifyProvider(): EcommerceProvider {
  // const href = `https://${shop}.myshopify.com/api/2021-10/graphql.json`
  // async function query(
  //   locale: string,
  //   query: string,
  //   variables?: unknown,
  //   nocache?: boolean,
  // ) {
  //   const request = new Request(href, {
  //     method: 'POST',
  //     headers: {
  //       'Accept-Language': locale,
  //       'Content-Type': 'application/json',
  //       'X-Shopify-Storefrot-Access-Token': storefrontAccessToken,
  //     },
  //     body: JSON.stringify({query, variables}),
  //   })
  //
  //   const maxAge =
  //     typeof maxAgeSeconds === 'function'
  //       ? maxAgeSeconds(request.clone())
  //       : maxAgeSeconds
  //
  //   if (!nocache && cache && typeof maxAge === 'number') {
  //     return cache(request, maxAge).then((res: unknown) => res.json())
  //   }
  //
  //   return fetch(request).then(res => res.json())
  // }

  return {
    async getCartInfo(locale, items) {
      // const json = await query(locale, getProductVariantsQuery, {
      //   ids: items.map(item => item.variantId),
      // })
      //
      // if (!json?.data?.nodes) {
      //   return undefined
      // }
      // let subtotal = new Decimal(0)
      // const itemsMap = new Map(items.map(item => [item.variantId, item]))
      // const fullItems: FullCartItem[] = []
      // for (const item of json.data.nodes) {
      //   const itemInput = !!item && itemsMap.get(item.id)
      //   if (!itemInput) {
      //     continue
      //   }
      //
      //   subtotal = subtotal.plus(
      //     new Decimal(item.priceV2.amount).times(itemInput.quantity),
      //   )
      //
      //   fullItems.push({
      //     quantity: itemInput.quantity,
      //     variantId: itemInput.variantId,
      //     info: {
      //       defaultVariantId: item.id,
      //       id: item.product.id,
      //       formattedPrice: formatPrice(item.priceV2),
      //       image:
      //         item.image?.originalSrc ||
      //         item.product.images.edges[0].node.originalSrc,
      //       title: item.product.title,
      //       formattedOptions: item.title,
      //       slug: item.product.handle,
      //     },
      //   })
      // }
      //
      // if (!fullItems.length) {
      //   return undefined
      // }
      //
      // const formattedSubTotal = formatPrice({
      //   amount: subtotal.toDecimalPlaces(2).toString(),
      //   currencyCode: json.data.nodes.find(
      //     (n: any) => !!n?.priceV2?.currencyCode,
      //   ).priceV2.currencyCode,
      // })
      //
      // const translations = getTranslations(locale, ['Calculated at checkout'])
      //
      // return {
      //   formattedShipping: translations['Calculated at checkout'],
      //   formattedSubTotal: formattedSubTotal,
      //   formattedTaxes: translations['Calculated at checkout'],
      //   formattedTotal: formattedSubTotal,
      //   items: fullItems,
      // }
      throw new Error('Not implemented')
    },
    async getCategories(locale, count, nocache) {
      // const json = await query(
      //   locale,
      //   getAllCollectionQuery,
      //   {
      //     first: count,
      //   },
      //   nocache,
      // )
      //
      // const categories = json.data.collections.edges.map(
      //   ({node: {title, handle}}: any): Category => ({
      //     name: title,
      //     slug: handle,
      //   }),
      // )
      //
      // return categories
      throw Error('Not implemented')
    },
    async getCheckoutUrl(locale, items) {
      // const lineItems = items.map(item => ({
      //   quantity: item.quantity,
      //   merchandiseId: item.variantId,
      // }))
      //
      // const json = await fetch(href, {
      //   method: 'POST',
      //   headers: {
      //     'Accept-Language': locale,
      //     'Content-Type': 'application/json',
      //     'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      //   },
      //   body: JSON.stringify({
      //     query: createCheckoutUrlMutation,
      //     variables: {lineItems},
      //   }),
      // }).then(res => res.json())
      //
      // return json.data.cartCreate.cart.checkoutUrl
      throw Error('Not implemented')
    },
    async getFeaturedProducts(locale) {
      // const json = await query(locale, getAllProductsQuery, {
      //   first: 12,
      // })
      //
      // const products = json.data.products.edges.map(
      //   ({
      //     node: {id, handle, title, images, priceRange, variants},
      //   }: any): Product => ({
      //     formattedPrice: formatPrice(priceRange.minVariantPrice),
      //     id,
      //     defaultVariantId: variants.edges[0].node.id,
      //     image: images.edges[0].node.originalSrc,
      //     slug: handle,
      //     title,
      //   }),
      // )
      //
      // return products
      throw Error('Not implemented')
    },
    async getPage(locale, slug) {
      // const json = await query(locale, getPageQuery, {query: `handle:${slug}`})
      // const page = json.data.pages.edges[0]?.node
      // if (!page) {
      //   return undefined
      // }
      //
      // return {
      //   body: page.body,
      //   id: page.id,
      //   slug: page.handle,
      //   summary: page.bodySummary,
      //   title: page.title,
      // }
      throw Error('Not implemented')
    },
    async getPages(locale) {
      // const json = await query(locale, getAllPagesQuery)
      // return json.data.pages.edges.map(
      //   ({node: {id, handle, title}}: any): Page => ({
      //     id,
      //     slug: handle,
      //     title,
      //   }),
      // )
      throw Error('Not implemented')
    },
    async getProduct(slug) {
      const data = await getProductQuery(slug)
      // WARNING: This code throws, evaluate using .safeParse instead
      const json = ProductQuerySchema.parse(data)

      const options: ProductOption[] = json.product.options.map(option => ({
        name: option.name,
        values: option.values.map(val => val.name || ''),
      }))

      let {
        id,
        name: title,
        description,
        photos: images,
        price,
        handle,
      } = json.product

      return {
        formattedPrice: formatPrice(price),
        id,
        image: images?.[0].src,
        images: images?.map(image => image.src),
        slug: handle,
        title,
        description,
        // availableForSale,
        options,
      }
    },
    async getProducts(
      locale,
      category,
      sort,
      search,
      cursor,
      perPage = 30,
      nocache,
    ) {
      // let q = ''
      // if (search) {
      //   q += `product_type:${search} OR title:${search} OR tag:${search} `
      //   category = undefined
      // }
      //
      // let sortVariables = {}
      // switch (sort) {
      //   case 'price-asc':
      //     sortVariables = {
      //       sortKey: 'PRICE',
      //       reverse: false,
      //     }
      //     break
      //   case 'price-desc':
      //     sortVariables = {
      //       sortKey: 'PRICE',
      //       reverse: true,
      //     }
      //     break
      //   case 'trending-desc':
      //     sortVariables = {
      //       sortKey: 'BEST_SELLING',
      //       reverse: false,
      //     }
      //     break
      //   case 'latest-desc':
      //     sortVariables = {
      //       sortKey: category ? 'CREATED' : 'CREATED_AT',
      //       reverse: true,
      //     }
      //     break
      // }
      //
      // const json = await query(
      //   locale,
      //   category ? getCollectionProductsQuery : getAllProductsQuery,
      //   {
      //     ...sortVariables,
      //     first: perPage,
      //     query: q,
      //     collection: category,
      //     cursor,
      //   },
      //   nocache,
      // )
      //
      // const productsInfo = category
      //   ? json.data.collections.edges[0]?.node.products
      //   : json.data.products
      //
      // const {edges, pageInfo} = productsInfo
      //
      // let nextPageCursor: string | undefined = undefined
      // const products =
      //   edges?.map(
      //     ({
      //       cursor,
      //       node: {id, handle, title, images, priceRange, variants},
      //     }: any): Product => {
      //       nextPageCursor = cursor
      //       return {
      //         formattedPrice: formatPrice(priceRange.minVariantPrice),
      //         id,
      //         defaultVariantId: variants.edges[0].node.id,
      //         image: images.edges[0].node.originalSrc,
      //         slug: handle,
      //         title,
      //       }
      //     },
      //   ) || []
      //
      // return {hasNextPage: pageInfo.hasNextPage, nextPageCursor, products}
      throw Error('Not implemented')
    },
    async getSortByOptions(locale) {
      // const translations = getTranslations(locale, [
      //   'Trending',
      //   'Latest arrivals',
      //   'Price: Low to high',
      //   'Price: High to low',
      // ])
      // return [
      //   {
      //     label: translations.Trending,
      //     value: 'trending-desc',
      //   },
      //   {
      //     label: translations['Latest arrivals'],
      //     value: 'latest-desc',
      //   },
      //   {
      //     label: translations['Price: Low to high'],
      //     value: 'price-asc',
      //   },
      //   {
      //     label: translations['Price: High to low'],
      //     value: 'price-desc',
      //   },
      // ]
      throw Error('Not implemented')
    },
    async getWishlistInfo(locale, items) {
      // const json = await query(locale, getProductVariantsQuery, {
      //   ids: items.map(item => item.variantId),
      // })
      //
      // if (!json?.data?.nodes) {
      //   return undefined
      // }
      //
      // const itemsMap = new Map(items.map(item => [item.variantId, item]))
      // const fullItems: FullWishlistItem[] = []
      // for (const item of json.data.nodes) {
      //   const itemInput = !!item && itemsMap.get(item.id)
      //   if (!itemInput) {
      //     continue
      //   }
      //
      //   fullItems.push({
      //     productId: item.product.id,
      //     quantity: itemInput.quantity,
      //     variantId: itemInput.variantId,
      //     info: {
      //       defaultVariantId: item.id,
      //       id: item.product.id,
      //       formattedPrice: formatPrice(item.priceV2),
      //       image:
      //         item.image?.originalSrc ||
      //         item.product.images.edges[0].node.originalSrc,
      //       title: item.product.title,
      //       formattedOptions: item.title,
      //       slug: item.product.handle,
      //     },
      //   })
      // }
      //
      // if (!fullItems.length) {
      //   return undefined
      // }
      //
      // return fullItems
      throw Error('Not implemented')
    },
  }
}

// function formatPrice({
//   amount,
//   currencyCode,
// }: {
//   amount: string
//   currencyCode: string
// }) {
//   return `$${amount} ${currencyCode}`
// }
//
// const createCheckoutUrlMutation = /* GraphQL */ `
//   mutation calculateCart($lineItems: [CartLineInput!]) {
//     cartCreate(input: {lines: $lineItems}) {
//       cart {
//         checkoutUrl
//       }
//     }
//   }
// `
//
// const getProductVariantsQuery = /* GraphQL */ `
//   query getProductVariantsQuery($ids: [ID!]!) {
//     nodes(ids: $ids) {
//       id
//       ... on ProductVariant {
//         title
//         image {
//           originalSrc
//         }
//         priceV2 {
//           amount
//           currencyCode
//         }
//         product {
//           id
//           title
//           handle
//           images(first: 1) {
//             edges {
//               node {
//                 originalSrc
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
//
// const getAllCollectionQuery = /* GraphQL */ `
//   query getSiteCollections($first: Int!) {
//     collections(first: $first) {
//       edges {
//         node {
//           title
//           handle
//         }
//       }
//     }
//   }
// `
//
// const getAllPagesQuery = /* GraphQL */ `
//   query getAllPages($first: Int = 250) {
//     pages(first: $first) {
//       edges {
//         node {
//           id
//           title
//           handle
//         }
//       }
//     }
//   }
// `
//
// const getPageQuery = /* GraphQL */ `
//   query getPage($query: String) {
//     pages(first: 1, query: $query) {
//       edges {
//         node {
//           id
//           handle
//           title
//           body
//           bodySummary
//         }
//       }
//     }
//   }
// `
//
// // eslint-disable-next-line prefer-const
// const productConnectionFragment = /* GraphQL */ `
//   fragment productConnection on ProductConnection {
//     pageInfo {
//       hasNextPage
//       hasPreviousPage
//     }
//     edges {
//       cursor
//       node {
//         id
//         title
//         vendor
//         handle
//         priceRange {
//           minVariantPrice {
//             amount
//             currencyCode
//           }
//         }
//         images(first: 1) {
//           pageInfo {
//             hasNextPage
//             hasPreviousPage
//           }
//           edges {
//             node {
//               originalSrc
//               altText
//               width
//               height
//             }
//           }
//         }
//         variants(first: 1) {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// `
//
// const getAllProductsQuery = /* GraphQL */ `
//   query getAllProducts(
//     $first: Int = 20
//     $query: String = ""
//     $sortKey: ProductSortKeys = RELEVANCE
//     $reverse: Boolean = false
//     $cursor: String
//   ) {
//     products(
//       first: $first
//       sortKey: $sortKey
//       reverse: $reverse
//       query: $query
//       after: $cursor
//     ) {
//       ...productConnection
//     }
//   }
//   ${productConnectionFragment}
// `
//
// const getCollectionProductsQuery = /* GraphQL */ `
//   query getProductsFromCollection(
//     $collection: String
//     $first: Int = 20
//     $sortKey: ProductCollectionSortKeys = RELEVANCE
//     $reverse: Boolean = false
//     $cursor: String
//   ) {
//     collections(first: 1, query: $collection) {
//       edges {
//         node {
//           handle
//           products(
//             first: $first
//             sortKey: $sortKey
//             reverse: $reverse
//             after: $cursor
//           ) {
//             ...productConnection
//           }
//         }
//       }
//     }
//   }
//   ${productConnectionFragment}
// `
//
// const getProductQuery = /* GraphQL */ `
//   query getProductBySlug($slug: String!) {
//     productByHandle(handle: $slug) {
//       id
//       handle
//       availableForSale
//       title
//       description
//       descriptionHtml
//       options {
//         id
//         name
//         values
//       }
//       priceRange {
//         maxVariantPrice {
//           amount
//           currencyCode
//         }
//         minVariantPrice {
//           amount
//           currencyCode
//         }
//       }
//       variants(first: 250) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//         edges {
//           node {
//             id
//             title
//             sku
//             availableForSale
//             requiresShipping
//             selectedOptions {
//               name
//               value
//             }
//             priceV2 {
//               amount
//               currencyCode
//             }
//             compareAtPriceV2 {
//               amount
//               currencyCode
//             }
//           }
//         }
//       }
//       images(first: 20) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//         edges {
//           node {
//             originalSrc
//             altText
//             width
//             height
//           }
//         }
//       }
//     }
//   }
// `

const defaultOptions = {
  where: {},
  skip: 0,
  orderBy: [],
}

export function getProductQuery(slug: string) {
  return Gql('query')({
    product: [
      {
        where: {
          handle: slug,
        },
      },
      {
        id: true,
        name: true,
        description: true,
        handle: true,
        status: true,
        price: true,
        category: {
          name: true,
        },
        skus: [
          defaultOptions,
          {
            id: true,
            sku: true,
            stock: true,
          },
        ],
        options: [
          defaultOptions,
          {
            name: true,
            values: [
              defaultOptions,
              {
                name: true,
              },
            ],
          },
        ],
        photos: [
          defaultOptions,
          {
            id: true,
            src: true,
            altText: true,
            optionValue: {
              name: true,
              option: {
                name: true,
              },
            },
          },
        ],
        cloudinaryPhotos: [
          defaultOptions,
          {
            id: true,
            image: {
              publicUrlTransformed: [
                {
                  transformation: {
                    width: '500',
                    fetch_format: 'webp',
                    quality: 'auto',
                  },
                },
                true,
              ],
            },
            altText: true,
            optionValue: {
              name: true,
              option: {
                name: true,
              },
            },
          },
        ],
      },
    ],
  })
}
