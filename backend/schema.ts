import {Post} from './schemas/Post'
import {Category} from './schemas/product/Category'
import {Option} from './schemas/product/Option'
import {OptionValue} from './schemas/product/OptionValue'
import {Product} from './schemas/product/Product'
import {SKU} from './schemas/product/SKU'
import {SKUValue} from './schemas/product/SKUValue'
import {Tag} from './schemas/Tag'
import {User} from './schemas/User'
import {Role} from './schemas/Role'
import {Order} from './schemas/Order'
import {OrderItem} from './schemas/OrderItem'
import {CloudinaryImage} from './schemas/product/CloudinaryImage'
import {Image} from './schemas/product/Image'

export const lists = {
  User,
  Post,
  Product,
  CloudinaryImage,
  Image,
  Tag,
  Category,
  Role,
  SKU,
  SKUValue,
  Option,
  OptionValue,
  Order,
  OrderItem,
}
