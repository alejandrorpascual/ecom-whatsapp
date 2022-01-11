import {Post} from './schemas/Post'
import {Category} from './schemas/product/Category'
import {Option} from './schemas/product/Option'
import {OptionValue} from './schemas/product/OptionValue'
import {Product} from './schemas/product/Product'
import {ProductImage} from './schemas/product/ProductImage'
import {SKU} from './schemas/product/SKU'
import {SKUValue} from './schemas/product/SKUValue'
import {Tag} from './schemas/Tag'
import {User} from './schemas/User'

export const lists = {
  User,
  Post,
  Product,
  ProductImage,
  Tag,
  Category,
  SKU,
  SKUValue,
  Option,
  OptionValue,
}
