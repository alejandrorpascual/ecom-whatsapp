import {z} from 'zod'

const product = {
  product: {
    id: '',
    name: '',
    skus: [{id: '', sku: '', stock: 0}],
    price: 0,
    handle: '',
    photos: [
      {
        id: '',
        src: '',
        altText: '',
        optionValue: {
          name: '',
          option: {name: ''},
        },
      },
    ],
    status: '',
    options: [
      {
        name: '',
        values: [{name: ''}],
      },
    ],
    category: {name: ''},
    description: '',
    cloudinaryPhotos: [
      {
        id: '',
        image: {
          publicUrlTransformed: '',
        },
        altText: '',
        optionValue: {
          name: '',
          option: {name: ''},
        },
      },
    ],
  },
}


