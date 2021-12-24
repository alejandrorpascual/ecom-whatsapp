import {Link, useLoaderData} from 'remix'
import {Gql, OrderDirection} from '../../graphql-zeus/zeus'

type LoaderData = Awaited<ReturnType<typeof loader>>
export async function loader() {
  const {products} = await Gql('query')({
    products: [
      {
        where: {},
        skip: 0,
        orderBy: [{name: OrderDirection.asc}],
      },
      {
        id: true,
        description: true,
        name: true,
        photo: {
          image: {
            publicUrlTransformed: [
              {
                transformation: {
                  fetch_format: 'webp',
                  width: '500',
                  quality: 'auto',
                },
              },
              true,
            ],
          },
        },
      },
    ],
  })

  return products
}

export default function Index() {
  const products = useLoaderData<LoaderData>()
  if (!products) {
    return <h1>No products yet</h1>
  }
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <div key={product.id}>
              <div className='relative w-full rounded-lg overflow-hidden'>
                <Link to={`product/${product.id}`}>
                  <img
                    src={product.photo?.image?.publicUrlTransformed}
                    alt={product.description}
                    className='aspect-square object-center object-cover'
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
