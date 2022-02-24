/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = GraphQLTypes["UserAuthenticationWithPasswordResult"] | GraphQLTypes["AuthenticatedItem"]

export type ValueTypes = {
    ["User"]: AliasType<{
	id?:boolean,
	name?:boolean,
	email?:boolean,
	oauthProvider?:boolean,
	oauthProfileId?:boolean,
	password?:ValueTypes["PasswordState"],
posts?: [{	where:ValueTypes["PostWhereInput"],	orderBy:ValueTypes["PostOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Post"]],
postsCount?: [{	where:ValueTypes["PostWhereInput"]},boolean],
products?: [{	where:ValueTypes["ProductWhereInput"],	orderBy:ValueTypes["ProductOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Product"]],
productsCount?: [{	where:ValueTypes["ProductWhereInput"]},boolean],
	role?:ValueTypes["Role"],
orders?: [{	where:ValueTypes["OrderWhereInput"],	orderBy:ValueTypes["OrderOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Order"]],
ordersCount?: [{	where:ValueTypes["OrderWhereInput"]},boolean],
	passwordResetToken?:ValueTypes["PasswordState"],
	passwordResetIssuedAt?:boolean,
	passwordResetRedeemedAt?:boolean,
		__typename?: boolean
}>;
	["UserOauthProviderType"]:UserOauthProviderType;
	["PasswordState"]: AliasType<{
	isSet?:boolean,
		__typename?: boolean
}>;
	["DateTime"]:unknown;
	["UserWhereUniqueInput"]: {
	id?:string | null,
	email?:string | null
};
	["UserWhereInput"]: {
	AND?:ValueTypes["UserWhereInput"][],
	OR?:ValueTypes["UserWhereInput"][],
	NOT?:ValueTypes["UserWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	email?:ValueTypes["StringFilter"] | null,
	oauthProvider?:ValueTypes["UserOauthProviderTypeNullableFilter"] | null,
	oauthProfileId?:ValueTypes["StringFilter"] | null,
	posts?:ValueTypes["PostManyRelationFilter"] | null,
	products?:ValueTypes["ProductManyRelationFilter"] | null,
	role?:ValueTypes["RoleWhereInput"] | null,
	orders?:ValueTypes["OrderManyRelationFilter"] | null,
	passwordResetToken?:ValueTypes["PasswordFilter"] | null,
	passwordResetIssuedAt?:ValueTypes["DateTimeNullableFilter"] | null,
	passwordResetRedeemedAt?:ValueTypes["DateTimeNullableFilter"] | null
};
	["IDFilter"]: {
	equals?:string | null,
	in?:string[],
	notIn?:string[],
	lt?:string | null,
	lte?:string | null,
	gt?:string | null,
	gte?:string | null,
	not?:ValueTypes["IDFilter"] | null
};
	["StringFilter"]: {
	equals?:string | null,
	in?:string[],
	notIn?:string[],
	lt?:string | null,
	lte?:string | null,
	gt?:string | null,
	gte?:string | null,
	contains?:string | null,
	startsWith?:string | null,
	endsWith?:string | null,
	mode?:ValueTypes["QueryMode"] | null,
	not?:ValueTypes["NestedStringFilter"] | null
};
	["QueryMode"]:QueryMode;
	["NestedStringFilter"]: {
	equals?:string | null,
	in?:string[],
	notIn?:string[],
	lt?:string | null,
	lte?:string | null,
	gt?:string | null,
	gte?:string | null,
	contains?:string | null,
	startsWith?:string | null,
	endsWith?:string | null,
	not?:ValueTypes["NestedStringFilter"] | null
};
	["UserOauthProviderTypeNullableFilter"]: {
	equals?:ValueTypes["UserOauthProviderType"] | null,
	in?:ValueTypes["UserOauthProviderType"][],
	notIn?:ValueTypes["UserOauthProviderType"][],
	not?:ValueTypes["UserOauthProviderTypeNullableFilter"] | null
};
	["PostManyRelationFilter"]: {
	every?:ValueTypes["PostWhereInput"] | null,
	some?:ValueTypes["PostWhereInput"] | null,
	none?:ValueTypes["PostWhereInput"] | null
};
	["ProductManyRelationFilter"]: {
	every?:ValueTypes["ProductWhereInput"] | null,
	some?:ValueTypes["ProductWhereInput"] | null,
	none?:ValueTypes["ProductWhereInput"] | null
};
	["OrderManyRelationFilter"]: {
	every?:ValueTypes["OrderWhereInput"] | null,
	some?:ValueTypes["OrderWhereInput"] | null,
	none?:ValueTypes["OrderWhereInput"] | null
};
	["PasswordFilter"]: {
	isSet:boolean
};
	["DateTimeNullableFilter"]: {
	equals?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	notIn?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["DateTimeNullableFilter"] | null
};
	["UserOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	email?:ValueTypes["OrderDirection"] | null,
	oauthProvider?:ValueTypes["OrderDirection"] | null,
	oauthProfileId?:ValueTypes["OrderDirection"] | null,
	passwordResetIssuedAt?:ValueTypes["OrderDirection"] | null,
	passwordResetRedeemedAt?:ValueTypes["OrderDirection"] | null
};
	["OrderDirection"]:OrderDirection;
	["UserUpdateInput"]: {
	name?:string | null,
	email?:string | null,
	oauthProvider?:ValueTypes["UserOauthProviderType"] | null,
	oauthProfileId?:string | null,
	password?:string | null,
	posts?:ValueTypes["PostRelateToManyForUpdateInput"] | null,
	products?:ValueTypes["ProductRelateToManyForUpdateInput"] | null,
	role?:ValueTypes["RoleRelateToOneForUpdateInput"] | null,
	orders?:ValueTypes["OrderRelateToManyForUpdateInput"] | null,
	passwordResetToken?:string | null,
	passwordResetIssuedAt?:ValueTypes["DateTime"] | null,
	passwordResetRedeemedAt?:ValueTypes["DateTime"] | null
};
	["PostRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["PostWhereUniqueInput"][],
	set?:ValueTypes["PostWhereUniqueInput"][],
	create?:ValueTypes["PostCreateInput"][],
	connect?:ValueTypes["PostWhereUniqueInput"][]
};
	["ProductRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["ProductWhereUniqueInput"][],
	set?:ValueTypes["ProductWhereUniqueInput"][],
	create?:ValueTypes["ProductCreateInput"][],
	connect?:ValueTypes["ProductWhereUniqueInput"][]
};
	["RoleRelateToOneForUpdateInput"]: {
	create?:ValueTypes["RoleCreateInput"] | null,
	connect?:ValueTypes["RoleWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["OrderRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["OrderWhereUniqueInput"][],
	set?:ValueTypes["OrderWhereUniqueInput"][],
	create?:ValueTypes["OrderCreateInput"][],
	connect?:ValueTypes["OrderWhereUniqueInput"][]
};
	["UserUpdateArgs"]: {
	where:ValueTypes["UserWhereUniqueInput"],
	data:ValueTypes["UserUpdateInput"]
};
	["UserCreateInput"]: {
	name?:string | null,
	email?:string | null,
	oauthProvider?:ValueTypes["UserOauthProviderType"] | null,
	oauthProfileId?:string | null,
	password?:string | null,
	posts?:ValueTypes["PostRelateToManyForCreateInput"] | null,
	products?:ValueTypes["ProductRelateToManyForCreateInput"] | null,
	role?:ValueTypes["RoleRelateToOneForCreateInput"] | null,
	orders?:ValueTypes["OrderRelateToManyForCreateInput"] | null,
	passwordResetToken?:string | null,
	passwordResetIssuedAt?:ValueTypes["DateTime"] | null,
	passwordResetRedeemedAt?:ValueTypes["DateTime"] | null
};
	["PostRelateToManyForCreateInput"]: {
	create?:ValueTypes["PostCreateInput"][],
	connect?:ValueTypes["PostWhereUniqueInput"][]
};
	["ProductRelateToManyForCreateInput"]: {
	create?:ValueTypes["ProductCreateInput"][],
	connect?:ValueTypes["ProductWhereUniqueInput"][]
};
	["RoleRelateToOneForCreateInput"]: {
	create?:ValueTypes["RoleCreateInput"] | null,
	connect?:ValueTypes["RoleWhereUniqueInput"] | null
};
	["OrderRelateToManyForCreateInput"]: {
	create?:ValueTypes["OrderCreateInput"][],
	connect?:ValueTypes["OrderWhereUniqueInput"][]
};
	["Post"]: AliasType<{
	id?:boolean,
	title?:boolean,
	status?:boolean,
	content?:ValueTypes["Post_content_Document"],
	publishDate?:boolean,
	author?:ValueTypes["User"],
tags?: [{	where:ValueTypes["TagWhereInput"],	orderBy:ValueTypes["TagOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Tag"]],
tagsCount?: [{	where:ValueTypes["TagWhereInput"]},boolean],
		__typename?: boolean
}>;
	["Post_content_Document"]: AliasType<{
document?: [{	hydrateRelationships:boolean},boolean],
		__typename?: boolean
}>;
	["PostWhereUniqueInput"]: {
	id?:string | null
};
	["PostWhereInput"]: {
	AND?:ValueTypes["PostWhereInput"][],
	OR?:ValueTypes["PostWhereInput"][],
	NOT?:ValueTypes["PostWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	title?:ValueTypes["StringFilter"] | null,
	status?:ValueTypes["StringNullableFilter"] | null,
	publishDate?:ValueTypes["DateTimeNullableFilter"] | null,
	author?:ValueTypes["UserWhereInput"] | null,
	tags?:ValueTypes["TagManyRelationFilter"] | null
};
	["StringNullableFilter"]: {
	equals?:string | null,
	in?:string[],
	notIn?:string[],
	lt?:string | null,
	lte?:string | null,
	gt?:string | null,
	gte?:string | null,
	contains?:string | null,
	startsWith?:string | null,
	endsWith?:string | null,
	mode?:ValueTypes["QueryMode"] | null,
	not?:ValueTypes["NestedStringNullableFilter"] | null
};
	["NestedStringNullableFilter"]: {
	equals?:string | null,
	in?:string[],
	notIn?:string[],
	lt?:string | null,
	lte?:string | null,
	gt?:string | null,
	gte?:string | null,
	contains?:string | null,
	startsWith?:string | null,
	endsWith?:string | null,
	not?:ValueTypes["NestedStringNullableFilter"] | null
};
	["TagManyRelationFilter"]: {
	every?:ValueTypes["TagWhereInput"] | null,
	some?:ValueTypes["TagWhereInput"] | null,
	none?:ValueTypes["TagWhereInput"] | null
};
	["PostOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	title?:ValueTypes["OrderDirection"] | null,
	status?:ValueTypes["OrderDirection"] | null,
	publishDate?:ValueTypes["OrderDirection"] | null
};
	["PostUpdateInput"]: {
	title?:string | null,
	status?:string | null,
	content?:ValueTypes["JSON"] | null,
	publishDate?:ValueTypes["DateTime"] | null,
	author?:ValueTypes["UserRelateToOneForUpdateInput"] | null,
	tags?:ValueTypes["TagRelateToManyForUpdateInput"] | null
};
	["UserRelateToOneForUpdateInput"]: {
	create?:ValueTypes["UserCreateInput"] | null,
	connect?:ValueTypes["UserWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["TagRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["TagWhereUniqueInput"][],
	set?:ValueTypes["TagWhereUniqueInput"][],
	create?:ValueTypes["TagCreateInput"][],
	connect?:ValueTypes["TagWhereUniqueInput"][]
};
	["PostUpdateArgs"]: {
	where:ValueTypes["PostWhereUniqueInput"],
	data:ValueTypes["PostUpdateInput"]
};
	["PostCreateInput"]: {
	title?:string | null,
	status?:string | null,
	content?:ValueTypes["JSON"] | null,
	publishDate?:ValueTypes["DateTime"] | null,
	author?:ValueTypes["UserRelateToOneForCreateInput"] | null,
	tags?:ValueTypes["TagRelateToManyForCreateInput"] | null
};
	["UserRelateToOneForCreateInput"]: {
	create?:ValueTypes["UserCreateInput"] | null,
	connect?:ValueTypes["UserWhereUniqueInput"] | null
};
	["TagRelateToManyForCreateInput"]: {
	create?:ValueTypes["TagCreateInput"][],
	connect?:ValueTypes["TagWhereUniqueInput"][]
};
	["Product"]: AliasType<{
	id?:boolean,
	name?:boolean,
	description?:boolean,
	handle?:boolean,
cloudinaryPhotos?: [{	where:ValueTypes["CloudinaryImageWhereInput"],	orderBy:ValueTypes["CloudinaryImageOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["CloudinaryImage"]],
cloudinaryPhotosCount?: [{	where:ValueTypes["CloudinaryImageWhereInput"]},boolean],
	price?:boolean,
photos?: [{	where:ValueTypes["ImageWhereInput"],	orderBy:ValueTypes["ImageOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Image"]],
photosCount?: [{	where:ValueTypes["ImageWhereInput"]},boolean],
	status?:boolean,
	user?:ValueTypes["User"],
skus?: [{	where:ValueTypes["SKUWhereInput"],	orderBy:ValueTypes["SKUOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["SKU"]],
skusCount?: [{	where:ValueTypes["SKUWhereInput"]},boolean],
	availableForSale?:boolean,
skuValues?: [{	where:ValueTypes["SKUValueWhereInput"],	orderBy:ValueTypes["SKUValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["SKUValue"]],
skuValuesCount?: [{	where:ValueTypes["SKUValueWhereInput"]},boolean],
options?: [{	where:ValueTypes["OptionWhereInput"],	orderBy:ValueTypes["OptionOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Option"]],
optionsCount?: [{	where:ValueTypes["OptionWhereInput"]},boolean],
optionValues?: [{	where:ValueTypes["OptionValueWhereInput"],	orderBy:ValueTypes["OptionValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OptionValue"]],
optionValuesCount?: [{	where:ValueTypes["OptionValueWhereInput"]},boolean],
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	["ProductWhereUniqueInput"]: {
	id?:string | null,
	handle?:string | null
};
	["ProductWhereInput"]: {
	AND?:ValueTypes["ProductWhereInput"][],
	OR?:ValueTypes["ProductWhereInput"][],
	NOT?:ValueTypes["ProductWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	description?:ValueTypes["StringFilter"] | null,
	handle?:ValueTypes["StringFilter"] | null,
	cloudinaryPhotos?:ValueTypes["CloudinaryImageManyRelationFilter"] | null,
	price?:ValueTypes["IntNullableFilter"] | null,
	photos?:ValueTypes["ImageManyRelationFilter"] | null,
	status?:ValueTypes["StringNullableFilter"] | null,
	user?:ValueTypes["UserWhereInput"] | null,
	skus?:ValueTypes["SKUManyRelationFilter"] | null,
	availableForSale?:ValueTypes["BooleanFilter"] | null,
	skuValues?:ValueTypes["SKUValueManyRelationFilter"] | null,
	options?:ValueTypes["OptionManyRelationFilter"] | null,
	optionValues?:ValueTypes["OptionValueManyRelationFilter"] | null,
	category?:ValueTypes["CategoryWhereInput"] | null
};
	["CloudinaryImageManyRelationFilter"]: {
	every?:ValueTypes["CloudinaryImageWhereInput"] | null,
	some?:ValueTypes["CloudinaryImageWhereInput"] | null,
	none?:ValueTypes["CloudinaryImageWhereInput"] | null
};
	["IntNullableFilter"]: {
	equals?:number | null,
	in?:number[],
	notIn?:number[],
	lt?:number | null,
	lte?:number | null,
	gt?:number | null,
	gte?:number | null,
	not?:ValueTypes["IntNullableFilter"] | null
};
	["ImageManyRelationFilter"]: {
	every?:ValueTypes["ImageWhereInput"] | null,
	some?:ValueTypes["ImageWhereInput"] | null,
	none?:ValueTypes["ImageWhereInput"] | null
};
	["SKUManyRelationFilter"]: {
	every?:ValueTypes["SKUWhereInput"] | null,
	some?:ValueTypes["SKUWhereInput"] | null,
	none?:ValueTypes["SKUWhereInput"] | null
};
	["BooleanFilter"]: {
	equals?:boolean | null,
	not?:ValueTypes["BooleanFilter"] | null
};
	["SKUValueManyRelationFilter"]: {
	every?:ValueTypes["SKUValueWhereInput"] | null,
	some?:ValueTypes["SKUValueWhereInput"] | null,
	none?:ValueTypes["SKUValueWhereInput"] | null
};
	["OptionManyRelationFilter"]: {
	every?:ValueTypes["OptionWhereInput"] | null,
	some?:ValueTypes["OptionWhereInput"] | null,
	none?:ValueTypes["OptionWhereInput"] | null
};
	["OptionValueManyRelationFilter"]: {
	every?:ValueTypes["OptionValueWhereInput"] | null,
	some?:ValueTypes["OptionValueWhereInput"] | null,
	none?:ValueTypes["OptionValueWhereInput"] | null
};
	["ProductOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	description?:ValueTypes["OrderDirection"] | null,
	handle?:ValueTypes["OrderDirection"] | null,
	price?:ValueTypes["OrderDirection"] | null,
	status?:ValueTypes["OrderDirection"] | null,
	availableForSale?:ValueTypes["OrderDirection"] | null
};
	["ProductUpdateInput"]: {
	name?:string | null,
	description?:string | null,
	handle?:string | null,
	cloudinaryPhotos?:ValueTypes["CloudinaryImageRelateToManyForUpdateInput"] | null,
	price?:number | null,
	photos?:ValueTypes["ImageRelateToManyForUpdateInput"] | null,
	status?:string | null,
	user?:ValueTypes["UserRelateToOneForUpdateInput"] | null,
	skus?:ValueTypes["SKURelateToManyForUpdateInput"] | null,
	availableForSale?:boolean | null,
	skuValues?:ValueTypes["SKUValueRelateToManyForUpdateInput"] | null,
	options?:ValueTypes["OptionRelateToManyForUpdateInput"] | null,
	optionValues?:ValueTypes["OptionValueRelateToManyForUpdateInput"] | null,
	category?:ValueTypes["CategoryRelateToOneForUpdateInput"] | null
};
	["CloudinaryImageRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["CloudinaryImageWhereUniqueInput"][],
	set?:ValueTypes["CloudinaryImageWhereUniqueInput"][],
	create?:ValueTypes["CloudinaryImageCreateInput"][],
	connect?:ValueTypes["CloudinaryImageWhereUniqueInput"][]
};
	["ImageRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["ImageWhereUniqueInput"][],
	set?:ValueTypes["ImageWhereUniqueInput"][],
	create?:ValueTypes["ImageCreateInput"][],
	connect?:ValueTypes["ImageWhereUniqueInput"][]
};
	["SKURelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["SKUWhereUniqueInput"][],
	set?:ValueTypes["SKUWhereUniqueInput"][],
	create?:ValueTypes["SKUCreateInput"][],
	connect?:ValueTypes["SKUWhereUniqueInput"][]
};
	["SKUValueRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["SKUValueWhereUniqueInput"][],
	set?:ValueTypes["SKUValueWhereUniqueInput"][],
	create?:ValueTypes["SKUValueCreateInput"][],
	connect?:ValueTypes["SKUValueWhereUniqueInput"][]
};
	["OptionRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["OptionWhereUniqueInput"][],
	set?:ValueTypes["OptionWhereUniqueInput"][],
	create?:ValueTypes["OptionCreateInput"][],
	connect?:ValueTypes["OptionWhereUniqueInput"][]
};
	["OptionValueRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["OptionValueWhereUniqueInput"][],
	set?:ValueTypes["OptionValueWhereUniqueInput"][],
	create?:ValueTypes["OptionValueCreateInput"][],
	connect?:ValueTypes["OptionValueWhereUniqueInput"][]
};
	["CategoryRelateToOneForUpdateInput"]: {
	create?:ValueTypes["CategoryCreateInput"] | null,
	connect?:ValueTypes["CategoryWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["ProductUpdateArgs"]: {
	where:ValueTypes["ProductWhereUniqueInput"],
	data:ValueTypes["ProductUpdateInput"]
};
	["ProductCreateInput"]: {
	name?:string | null,
	description?:string | null,
	handle?:string | null,
	cloudinaryPhotos?:ValueTypes["CloudinaryImageRelateToManyForCreateInput"] | null,
	price?:number | null,
	photos?:ValueTypes["ImageRelateToManyForCreateInput"] | null,
	status?:string | null,
	user?:ValueTypes["UserRelateToOneForCreateInput"] | null,
	skus?:ValueTypes["SKURelateToManyForCreateInput"] | null,
	availableForSale?:boolean | null,
	skuValues?:ValueTypes["SKUValueRelateToManyForCreateInput"] | null,
	options?:ValueTypes["OptionRelateToManyForCreateInput"] | null,
	optionValues?:ValueTypes["OptionValueRelateToManyForCreateInput"] | null,
	category?:ValueTypes["CategoryRelateToOneForCreateInput"] | null
};
	["CloudinaryImageRelateToManyForCreateInput"]: {
	create?:ValueTypes["CloudinaryImageCreateInput"][],
	connect?:ValueTypes["CloudinaryImageWhereUniqueInput"][]
};
	["ImageRelateToManyForCreateInput"]: {
	create?:ValueTypes["ImageCreateInput"][],
	connect?:ValueTypes["ImageWhereUniqueInput"][]
};
	["SKURelateToManyForCreateInput"]: {
	create?:ValueTypes["SKUCreateInput"][],
	connect?:ValueTypes["SKUWhereUniqueInput"][]
};
	["SKUValueRelateToManyForCreateInput"]: {
	create?:ValueTypes["SKUValueCreateInput"][],
	connect?:ValueTypes["SKUValueWhereUniqueInput"][]
};
	["OptionRelateToManyForCreateInput"]: {
	create?:ValueTypes["OptionCreateInput"][],
	connect?:ValueTypes["OptionWhereUniqueInput"][]
};
	["OptionValueRelateToManyForCreateInput"]: {
	create?:ValueTypes["OptionValueCreateInput"][],
	connect?:ValueTypes["OptionValueWhereUniqueInput"][]
};
	["CategoryRelateToOneForCreateInput"]: {
	create?:ValueTypes["CategoryCreateInput"] | null,
	connect?:ValueTypes["CategoryWhereUniqueInput"] | null
};
	["CloudinaryImage"]: AliasType<{
	id?:boolean,
	image?:ValueTypes["CloudinaryImage_File"],
	altText?:boolean,
	product?:ValueTypes["Product"],
	option?:ValueTypes["Option"],
	optionValue?:ValueTypes["OptionValue"],
		__typename?: boolean
}>;
	["CloudinaryImage_File"]: AliasType<{
	id?:boolean,
	filename?:boolean,
	originalFilename?:boolean,
	mimetype?:boolean,
	encoding?:boolean,
	publicUrl?:boolean,
publicUrlTransformed?: [{	transformation?:ValueTypes["CloudinaryImageFormat"] | null},boolean],
		__typename?: boolean
}>;
	/** Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
All options are strings as they ultimately end up in a URL. */
["CloudinaryImageFormat"]: {
	/**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
	prettyName?:string | null,
	width?:string | null,
	height?:string | null,
	crop?:string | null,
	aspect_ratio?:string | null,
	gravity?:string | null,
	zoom?:string | null,
	x?:string | null,
	y?:string | null,
	format?:string | null,
	fetch_format?:string | null,
	quality?:string | null,
	radius?:string | null,
	angle?:string | null,
	effect?:string | null,
	opacity?:string | null,
	border?:string | null,
	background?:string | null,
	overlay?:string | null,
	underlay?:string | null,
	default_image?:string | null,
	delay?:string | null,
	color?:string | null,
	color_space?:string | null,
	dpr?:string | null,
	page?:string | null,
	density?:string | null,
	flags?:string | null,
	transformation?:string | null
};
	["CloudinaryImageWhereUniqueInput"]: {
	id?:string | null
};
	["CloudinaryImageWhereInput"]: {
	AND?:ValueTypes["CloudinaryImageWhereInput"][],
	OR?:ValueTypes["CloudinaryImageWhereInput"][],
	NOT?:ValueTypes["CloudinaryImageWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	altText?:ValueTypes["StringFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null,
	option?:ValueTypes["OptionWhereInput"] | null,
	optionValue?:ValueTypes["OptionValueWhereInput"] | null
};
	["CloudinaryImageOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	altText?:ValueTypes["OrderDirection"] | null
};
	["CloudinaryImageUpdateInput"]: {
	image?:ValueTypes["Upload"] | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForUpdateInput"] | null,
	optionValue?:ValueTypes["OptionValueRelateToOneForUpdateInput"] | null
};
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:unknown;
	["ProductRelateToOneForUpdateInput"]: {
	create?:ValueTypes["ProductCreateInput"] | null,
	connect?:ValueTypes["ProductWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["OptionRelateToOneForUpdateInput"]: {
	create?:ValueTypes["OptionCreateInput"] | null,
	connect?:ValueTypes["OptionWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["OptionValueRelateToOneForUpdateInput"]: {
	create?:ValueTypes["OptionValueCreateInput"] | null,
	connect?:ValueTypes["OptionValueWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["CloudinaryImageUpdateArgs"]: {
	where:ValueTypes["CloudinaryImageWhereUniqueInput"],
	data:ValueTypes["CloudinaryImageUpdateInput"]
};
	["CloudinaryImageCreateInput"]: {
	image?:ValueTypes["Upload"] | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForCreateInput"] | null,
	optionValue?:ValueTypes["OptionValueRelateToOneForCreateInput"] | null
};
	["ProductRelateToOneForCreateInput"]: {
	create?:ValueTypes["ProductCreateInput"] | null,
	connect?:ValueTypes["ProductWhereUniqueInput"] | null
};
	["OptionRelateToOneForCreateInput"]: {
	create?:ValueTypes["OptionCreateInput"] | null,
	connect?:ValueTypes["OptionWhereUniqueInput"] | null
};
	["OptionValueRelateToOneForCreateInput"]: {
	create?:ValueTypes["OptionValueCreateInput"] | null,
	connect?:ValueTypes["OptionValueWhereUniqueInput"] | null
};
	["Image"]: AliasType<{
	id?:boolean,
	src?:boolean,
	altText?:boolean,
	product?:ValueTypes["Product"],
	option?:ValueTypes["Option"],
	optionValue?:ValueTypes["OptionValue"],
		__typename?: boolean
}>;
	["ImageWhereUniqueInput"]: {
	id?:string | null
};
	["ImageWhereInput"]: {
	AND?:ValueTypes["ImageWhereInput"][],
	OR?:ValueTypes["ImageWhereInput"][],
	NOT?:ValueTypes["ImageWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	src?:ValueTypes["StringFilter"] | null,
	altText?:ValueTypes["StringFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null,
	option?:ValueTypes["OptionWhereInput"] | null,
	optionValue?:ValueTypes["OptionValueWhereInput"] | null
};
	["ImageOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	src?:ValueTypes["OrderDirection"] | null,
	altText?:ValueTypes["OrderDirection"] | null
};
	["ImageUpdateInput"]: {
	src?:string | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForUpdateInput"] | null,
	optionValue?:ValueTypes["OptionValueRelateToOneForUpdateInput"] | null
};
	["ImageUpdateArgs"]: {
	where:ValueTypes["ImageWhereUniqueInput"],
	data:ValueTypes["ImageUpdateInput"]
};
	["ImageCreateInput"]: {
	src?:string | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForCreateInput"] | null,
	optionValue?:ValueTypes["OptionValueRelateToOneForCreateInput"] | null
};
	["Tag"]: AliasType<{
	id?:boolean,
	name?:boolean,
posts?: [{	where:ValueTypes["PostWhereInput"],	orderBy:ValueTypes["PostOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Post"]],
postsCount?: [{	where:ValueTypes["PostWhereInput"]},boolean],
		__typename?: boolean
}>;
	["TagWhereUniqueInput"]: {
	id?:string | null
};
	["TagWhereInput"]: {
	AND?:ValueTypes["TagWhereInput"][],
	OR?:ValueTypes["TagWhereInput"][],
	NOT?:ValueTypes["TagWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	posts?:ValueTypes["PostManyRelationFilter"] | null
};
	["TagOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null
};
	["TagUpdateInput"]: {
	name?:string | null,
	posts?:ValueTypes["PostRelateToManyForUpdateInput"] | null
};
	["TagUpdateArgs"]: {
	where:ValueTypes["TagWhereUniqueInput"],
	data:ValueTypes["TagUpdateInput"]
};
	["TagCreateInput"]: {
	name?:string | null,
	posts?:ValueTypes["PostRelateToManyForCreateInput"] | null
};
	["Category"]: AliasType<{
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["CategoryWhereUniqueInput"]: {
	id?:string | null
};
	["CategoryWhereInput"]: {
	AND?:ValueTypes["CategoryWhereInput"][],
	OR?:ValueTypes["CategoryWhereInput"][],
	NOT?:ValueTypes["CategoryWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null
};
	["CategoryOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null
};
	["CategoryUpdateInput"]: {
	name?:string | null
};
	["CategoryUpdateArgs"]: {
	where:ValueTypes["CategoryWhereUniqueInput"],
	data:ValueTypes["CategoryUpdateInput"]
};
	["CategoryCreateInput"]: {
	name?:string | null
};
	["Role"]: AliasType<{
	id?:boolean,
	name?:boolean,
	canManageProducts?:boolean,
	canSeeOtherUsers?:boolean,
	canManageUsers?:boolean,
	canManageRoles?:boolean,
	canManageCart?:boolean,
	canManageOrders?:boolean,
assignedTo?: [{	where:ValueTypes["UserWhereInput"],	orderBy:ValueTypes["UserOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["User"]],
assignedToCount?: [{	where:ValueTypes["UserWhereInput"]},boolean],
		__typename?: boolean
}>;
	["RoleWhereUniqueInput"]: {
	id?:string | null
};
	["RoleWhereInput"]: {
	AND?:ValueTypes["RoleWhereInput"][],
	OR?:ValueTypes["RoleWhereInput"][],
	NOT?:ValueTypes["RoleWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	canManageProducts?:ValueTypes["BooleanFilter"] | null,
	canSeeOtherUsers?:ValueTypes["BooleanFilter"] | null,
	canManageUsers?:ValueTypes["BooleanFilter"] | null,
	canManageRoles?:ValueTypes["BooleanFilter"] | null,
	canManageCart?:ValueTypes["BooleanFilter"] | null,
	canManageOrders?:ValueTypes["BooleanFilter"] | null,
	assignedTo?:ValueTypes["UserManyRelationFilter"] | null
};
	["UserManyRelationFilter"]: {
	every?:ValueTypes["UserWhereInput"] | null,
	some?:ValueTypes["UserWhereInput"] | null,
	none?:ValueTypes["UserWhereInput"] | null
};
	["RoleOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	canManageProducts?:ValueTypes["OrderDirection"] | null,
	canSeeOtherUsers?:ValueTypes["OrderDirection"] | null,
	canManageUsers?:ValueTypes["OrderDirection"] | null,
	canManageRoles?:ValueTypes["OrderDirection"] | null,
	canManageCart?:ValueTypes["OrderDirection"] | null,
	canManageOrders?:ValueTypes["OrderDirection"] | null
};
	["RoleUpdateInput"]: {
	name?:string | null,
	canManageProducts?:boolean | null,
	canSeeOtherUsers?:boolean | null,
	canManageUsers?:boolean | null,
	canManageRoles?:boolean | null,
	canManageCart?:boolean | null,
	canManageOrders?:boolean | null,
	assignedTo?:ValueTypes["UserRelateToManyForUpdateInput"] | null
};
	["UserRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["UserWhereUniqueInput"][],
	set?:ValueTypes["UserWhereUniqueInput"][],
	create?:ValueTypes["UserCreateInput"][],
	connect?:ValueTypes["UserWhereUniqueInput"][]
};
	["RoleUpdateArgs"]: {
	where:ValueTypes["RoleWhereUniqueInput"],
	data:ValueTypes["RoleUpdateInput"]
};
	["RoleCreateInput"]: {
	name?:string | null,
	canManageProducts?:boolean | null,
	canSeeOtherUsers?:boolean | null,
	canManageUsers?:boolean | null,
	canManageRoles?:boolean | null,
	canManageCart?:boolean | null,
	canManageOrders?:boolean | null,
	assignedTo?:ValueTypes["UserRelateToManyForCreateInput"] | null
};
	["UserRelateToManyForCreateInput"]: {
	create?:ValueTypes["UserCreateInput"][],
	connect?:ValueTypes["UserWhereUniqueInput"][]
};
	["SKU"]: AliasType<{
	id?:boolean,
	sku?:boolean,
	product?:ValueTypes["Product"],
	stock?:boolean,
		__typename?: boolean
}>;
	["SKUWhereUniqueInput"]: {
	id?:string | null,
	sku?:string | null
};
	["SKUWhereInput"]: {
	AND?:ValueTypes["SKUWhereInput"][],
	OR?:ValueTypes["SKUWhereInput"][],
	NOT?:ValueTypes["SKUWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	sku?:ValueTypes["StringFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null,
	stock?:ValueTypes["IntNullableFilter"] | null
};
	["SKUOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	sku?:ValueTypes["OrderDirection"] | null,
	stock?:ValueTypes["OrderDirection"] | null
};
	["SKUUpdateInput"]: {
	sku?:string | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null,
	stock?:number | null
};
	["SKUUpdateArgs"]: {
	where:ValueTypes["SKUWhereUniqueInput"],
	data:ValueTypes["SKUUpdateInput"]
};
	["SKUCreateInput"]: {
	sku?:string | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null,
	stock?:number | null
};
	["SKUValue"]: AliasType<{
	id?:boolean,
	product?:ValueTypes["Product"],
	SKU?:ValueTypes["SKU"],
options?: [{	where:ValueTypes["OptionWhereInput"],	orderBy:ValueTypes["OptionOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Option"]],
optionsCount?: [{	where:ValueTypes["OptionWhereInput"]},boolean],
optionValues?: [{	where:ValueTypes["OptionValueWhereInput"],	orderBy:ValueTypes["OptionValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OptionValue"]],
optionValuesCount?: [{	where:ValueTypes["OptionValueWhereInput"]},boolean],
		__typename?: boolean
}>;
	["SKUValueWhereUniqueInput"]: {
	id?:string | null
};
	["SKUValueWhereInput"]: {
	AND?:ValueTypes["SKUValueWhereInput"][],
	OR?:ValueTypes["SKUValueWhereInput"][],
	NOT?:ValueTypes["SKUValueWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null,
	SKU?:ValueTypes["SKUWhereInput"] | null,
	options?:ValueTypes["OptionManyRelationFilter"] | null,
	optionValues?:ValueTypes["OptionValueManyRelationFilter"] | null
};
	["SKUValueOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null
};
	["SKUValueUpdateInput"]: {
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null,
	SKU?:ValueTypes["SKURelateToOneForUpdateInput"] | null,
	options?:ValueTypes["OptionRelateToManyForUpdateInput"] | null,
	optionValues?:ValueTypes["OptionValueRelateToManyForUpdateInput"] | null
};
	["SKURelateToOneForUpdateInput"]: {
	create?:ValueTypes["SKUCreateInput"] | null,
	connect?:ValueTypes["SKUWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["SKUValueUpdateArgs"]: {
	where:ValueTypes["SKUValueWhereUniqueInput"],
	data:ValueTypes["SKUValueUpdateInput"]
};
	["SKUValueCreateInput"]: {
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null,
	SKU?:ValueTypes["SKURelateToOneForCreateInput"] | null,
	options?:ValueTypes["OptionRelateToManyForCreateInput"] | null,
	optionValues?:ValueTypes["OptionValueRelateToManyForCreateInput"] | null
};
	["SKURelateToOneForCreateInput"]: {
	create?:ValueTypes["SKUCreateInput"] | null,
	connect?:ValueTypes["SKUWhereUniqueInput"] | null
};
	["Option"]: AliasType<{
	id?:boolean,
	name?:boolean,
values?: [{	where:ValueTypes["OptionValueWhereInput"],	orderBy:ValueTypes["OptionValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OptionValue"]],
valuesCount?: [{	where:ValueTypes["OptionValueWhereInput"]},boolean],
	product?:ValueTypes["Product"],
		__typename?: boolean
}>;
	["OptionWhereUniqueInput"]: {
	id?:string | null,
	name?:string | null
};
	["OptionWhereInput"]: {
	AND?:ValueTypes["OptionWhereInput"][],
	OR?:ValueTypes["OptionWhereInput"][],
	NOT?:ValueTypes["OptionWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	values?:ValueTypes["OptionValueManyRelationFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null
};
	["OptionOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null
};
	["OptionUpdateInput"]: {
	name?:string | null,
	values?:ValueTypes["OptionValueRelateToManyForUpdateInput"] | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null
};
	["OptionUpdateArgs"]: {
	where:ValueTypes["OptionWhereUniqueInput"],
	data:ValueTypes["OptionUpdateInput"]
};
	["OptionCreateInput"]: {
	name?:string | null,
	values?:ValueTypes["OptionValueRelateToManyForCreateInput"] | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null
};
	["OptionValue"]: AliasType<{
	id?:boolean,
	name?:boolean,
	product?:ValueTypes["Product"],
	option?:ValueTypes["Option"],
		__typename?: boolean
}>;
	["OptionValueWhereUniqueInput"]: {
	id?:string | null,
	name?:string | null
};
	["OptionValueWhereInput"]: {
	AND?:ValueTypes["OptionValueWhereInput"][],
	OR?:ValueTypes["OptionValueWhereInput"][],
	NOT?:ValueTypes["OptionValueWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null,
	option?:ValueTypes["OptionWhereInput"] | null
};
	["OptionValueOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null
};
	["OptionValueUpdateInput"]: {
	name?:string | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForUpdateInput"] | null
};
	["OptionValueUpdateArgs"]: {
	where:ValueTypes["OptionValueWhereUniqueInput"],
	data:ValueTypes["OptionValueUpdateInput"]
};
	["OptionValueCreateInput"]: {
	name?:string | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null,
	option?:ValueTypes["OptionRelateToOneForCreateInput"] | null
};
	["Order"]: AliasType<{
	id?:boolean,
	label?:boolean,
	total?:boolean,
items?: [{	where:ValueTypes["OrderItemWhereInput"],	orderBy:ValueTypes["OrderItemOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OrderItem"]],
itemsCount?: [{	where:ValueTypes["OrderItemWhereInput"]},boolean],
	user?:ValueTypes["User"],
	charge?:boolean,
		__typename?: boolean
}>;
	["OrderWhereUniqueInput"]: {
	id?:string | null
};
	["OrderWhereInput"]: {
	AND?:ValueTypes["OrderWhereInput"][],
	OR?:ValueTypes["OrderWhereInput"][],
	NOT?:ValueTypes["OrderWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	total?:ValueTypes["IntNullableFilter"] | null,
	items?:ValueTypes["OrderItemManyRelationFilter"] | null,
	user?:ValueTypes["UserWhereInput"] | null,
	charge?:ValueTypes["StringFilter"] | null
};
	["OrderItemManyRelationFilter"]: {
	every?:ValueTypes["OrderItemWhereInput"] | null,
	some?:ValueTypes["OrderItemWhereInput"] | null,
	none?:ValueTypes["OrderItemWhereInput"] | null
};
	["OrderOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	total?:ValueTypes["OrderDirection"] | null,
	charge?:ValueTypes["OrderDirection"] | null
};
	["OrderUpdateInput"]: {
	total?:number | null,
	items?:ValueTypes["OrderItemRelateToManyForUpdateInput"] | null,
	user?:ValueTypes["UserRelateToOneForUpdateInput"] | null,
	charge?:string | null
};
	["OrderItemRelateToManyForUpdateInput"]: {
	disconnect?:ValueTypes["OrderItemWhereUniqueInput"][],
	set?:ValueTypes["OrderItemWhereUniqueInput"][],
	create?:ValueTypes["OrderItemCreateInput"][],
	connect?:ValueTypes["OrderItemWhereUniqueInput"][]
};
	["OrderUpdateArgs"]: {
	where:ValueTypes["OrderWhereUniqueInput"],
	data:ValueTypes["OrderUpdateInput"]
};
	["OrderCreateInput"]: {
	total?:number | null,
	items?:ValueTypes["OrderItemRelateToManyForCreateInput"] | null,
	user?:ValueTypes["UserRelateToOneForCreateInput"] | null,
	charge?:string | null
};
	["OrderItemRelateToManyForCreateInput"]: {
	create?:ValueTypes["OrderItemCreateInput"][],
	connect?:ValueTypes["OrderItemWhereUniqueInput"][]
};
	["OrderItem"]: AliasType<{
	id?:boolean,
	name?:boolean,
	description?:boolean,
	cloudinaryImage?:ValueTypes["CloudinaryImage"],
	image?:ValueTypes["Image"],
	price?:boolean,
	quantity?:boolean,
	order?:ValueTypes["Order"],
		__typename?: boolean
}>;
	["OrderItemWhereUniqueInput"]: {
	id?:string | null
};
	["OrderItemWhereInput"]: {
	AND?:ValueTypes["OrderItemWhereInput"][],
	OR?:ValueTypes["OrderItemWhereInput"][],
	NOT?:ValueTypes["OrderItemWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	description?:ValueTypes["StringFilter"] | null,
	cloudinaryImage?:ValueTypes["CloudinaryImageWhereInput"] | null,
	image?:ValueTypes["ImageWhereInput"] | null,
	price?:ValueTypes["IntNullableFilter"] | null,
	quantity?:ValueTypes["IntNullableFilter"] | null,
	order?:ValueTypes["OrderWhereInput"] | null
};
	["OrderItemOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	description?:ValueTypes["OrderDirection"] | null,
	price?:ValueTypes["OrderDirection"] | null,
	quantity?:ValueTypes["OrderDirection"] | null
};
	["OrderItemUpdateInput"]: {
	name?:string | null,
	description?:string | null,
	cloudinaryImage?:ValueTypes["CloudinaryImageRelateToOneForUpdateInput"] | null,
	image?:ValueTypes["ImageRelateToOneForUpdateInput"] | null,
	price?:number | null,
	quantity?:number | null,
	order?:ValueTypes["OrderRelateToOneForUpdateInput"] | null
};
	["CloudinaryImageRelateToOneForUpdateInput"]: {
	create?:ValueTypes["CloudinaryImageCreateInput"] | null,
	connect?:ValueTypes["CloudinaryImageWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["ImageRelateToOneForUpdateInput"]: {
	create?:ValueTypes["ImageCreateInput"] | null,
	connect?:ValueTypes["ImageWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["OrderRelateToOneForUpdateInput"]: {
	create?:ValueTypes["OrderCreateInput"] | null,
	connect?:ValueTypes["OrderWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["OrderItemUpdateArgs"]: {
	where:ValueTypes["OrderItemWhereUniqueInput"],
	data:ValueTypes["OrderItemUpdateInput"]
};
	["OrderItemCreateInput"]: {
	name?:string | null,
	description?:string | null,
	cloudinaryImage?:ValueTypes["CloudinaryImageRelateToOneForCreateInput"] | null,
	image?:ValueTypes["ImageRelateToOneForCreateInput"] | null,
	price?:number | null,
	quantity?:number | null,
	order?:ValueTypes["OrderRelateToOneForCreateInput"] | null
};
	["CloudinaryImageRelateToOneForCreateInput"]: {
	create?:ValueTypes["CloudinaryImageCreateInput"] | null,
	connect?:ValueTypes["CloudinaryImageWhereUniqueInput"] | null
};
	["ImageRelateToOneForCreateInput"]: {
	create?:ValueTypes["ImageCreateInput"] | null,
	connect?:ValueTypes["ImageWhereUniqueInput"] | null
};
	["OrderRelateToOneForCreateInput"]: {
	create?:ValueTypes["OrderCreateInput"] | null,
	connect?:ValueTypes["OrderWhereUniqueInput"] | null
};
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:unknown;
	["Mutation"]: AliasType<{
createUser?: [{	data:ValueTypes["UserCreateInput"]},ValueTypes["User"]],
createUsers?: [{	data:ValueTypes["UserCreateInput"][]},ValueTypes["User"]],
updateUser?: [{	where:ValueTypes["UserWhereUniqueInput"],	data:ValueTypes["UserUpdateInput"]},ValueTypes["User"]],
updateUsers?: [{	data:ValueTypes["UserUpdateArgs"][]},ValueTypes["User"]],
deleteUser?: [{	where:ValueTypes["UserWhereUniqueInput"]},ValueTypes["User"]],
deleteUsers?: [{	where:ValueTypes["UserWhereUniqueInput"][]},ValueTypes["User"]],
createPost?: [{	data:ValueTypes["PostCreateInput"]},ValueTypes["Post"]],
createPosts?: [{	data:ValueTypes["PostCreateInput"][]},ValueTypes["Post"]],
updatePost?: [{	where:ValueTypes["PostWhereUniqueInput"],	data:ValueTypes["PostUpdateInput"]},ValueTypes["Post"]],
updatePosts?: [{	data:ValueTypes["PostUpdateArgs"][]},ValueTypes["Post"]],
deletePost?: [{	where:ValueTypes["PostWhereUniqueInput"]},ValueTypes["Post"]],
deletePosts?: [{	where:ValueTypes["PostWhereUniqueInput"][]},ValueTypes["Post"]],
createProduct?: [{	data:ValueTypes["ProductCreateInput"]},ValueTypes["Product"]],
createProducts?: [{	data:ValueTypes["ProductCreateInput"][]},ValueTypes["Product"]],
updateProduct?: [{	where:ValueTypes["ProductWhereUniqueInput"],	data:ValueTypes["ProductUpdateInput"]},ValueTypes["Product"]],
updateProducts?: [{	data:ValueTypes["ProductUpdateArgs"][]},ValueTypes["Product"]],
deleteProduct?: [{	where:ValueTypes["ProductWhereUniqueInput"]},ValueTypes["Product"]],
deleteProducts?: [{	where:ValueTypes["ProductWhereUniqueInput"][]},ValueTypes["Product"]],
createCloudinaryImage?: [{	data:ValueTypes["CloudinaryImageCreateInput"]},ValueTypes["CloudinaryImage"]],
createCloudinaryImages?: [{	data:ValueTypes["CloudinaryImageCreateInput"][]},ValueTypes["CloudinaryImage"]],
updateCloudinaryImage?: [{	where:ValueTypes["CloudinaryImageWhereUniqueInput"],	data:ValueTypes["CloudinaryImageUpdateInput"]},ValueTypes["CloudinaryImage"]],
updateCloudinaryImages?: [{	data:ValueTypes["CloudinaryImageUpdateArgs"][]},ValueTypes["CloudinaryImage"]],
deleteCloudinaryImage?: [{	where:ValueTypes["CloudinaryImageWhereUniqueInput"]},ValueTypes["CloudinaryImage"]],
deleteCloudinaryImages?: [{	where:ValueTypes["CloudinaryImageWhereUniqueInput"][]},ValueTypes["CloudinaryImage"]],
createImage?: [{	data:ValueTypes["ImageCreateInput"]},ValueTypes["Image"]],
createImages?: [{	data:ValueTypes["ImageCreateInput"][]},ValueTypes["Image"]],
updateImage?: [{	where:ValueTypes["ImageWhereUniqueInput"],	data:ValueTypes["ImageUpdateInput"]},ValueTypes["Image"]],
updateImages?: [{	data:ValueTypes["ImageUpdateArgs"][]},ValueTypes["Image"]],
deleteImage?: [{	where:ValueTypes["ImageWhereUniqueInput"]},ValueTypes["Image"]],
deleteImages?: [{	where:ValueTypes["ImageWhereUniqueInput"][]},ValueTypes["Image"]],
createTag?: [{	data:ValueTypes["TagCreateInput"]},ValueTypes["Tag"]],
createTags?: [{	data:ValueTypes["TagCreateInput"][]},ValueTypes["Tag"]],
updateTag?: [{	where:ValueTypes["TagWhereUniqueInput"],	data:ValueTypes["TagUpdateInput"]},ValueTypes["Tag"]],
updateTags?: [{	data:ValueTypes["TagUpdateArgs"][]},ValueTypes["Tag"]],
deleteTag?: [{	where:ValueTypes["TagWhereUniqueInput"]},ValueTypes["Tag"]],
deleteTags?: [{	where:ValueTypes["TagWhereUniqueInput"][]},ValueTypes["Tag"]],
createCategory?: [{	data:ValueTypes["CategoryCreateInput"]},ValueTypes["Category"]],
createCategories?: [{	data:ValueTypes["CategoryCreateInput"][]},ValueTypes["Category"]],
updateCategory?: [{	where:ValueTypes["CategoryWhereUniqueInput"],	data:ValueTypes["CategoryUpdateInput"]},ValueTypes["Category"]],
updateCategories?: [{	data:ValueTypes["CategoryUpdateArgs"][]},ValueTypes["Category"]],
deleteCategory?: [{	where:ValueTypes["CategoryWhereUniqueInput"]},ValueTypes["Category"]],
deleteCategories?: [{	where:ValueTypes["CategoryWhereUniqueInput"][]},ValueTypes["Category"]],
createRole?: [{	data:ValueTypes["RoleCreateInput"]},ValueTypes["Role"]],
createRoles?: [{	data:ValueTypes["RoleCreateInput"][]},ValueTypes["Role"]],
updateRole?: [{	where:ValueTypes["RoleWhereUniqueInput"],	data:ValueTypes["RoleUpdateInput"]},ValueTypes["Role"]],
updateRoles?: [{	data:ValueTypes["RoleUpdateArgs"][]},ValueTypes["Role"]],
deleteRole?: [{	where:ValueTypes["RoleWhereUniqueInput"]},ValueTypes["Role"]],
deleteRoles?: [{	where:ValueTypes["RoleWhereUniqueInput"][]},ValueTypes["Role"]],
createSKU?: [{	data:ValueTypes["SKUCreateInput"]},ValueTypes["SKU"]],
createSKUS?: [{	data:ValueTypes["SKUCreateInput"][]},ValueTypes["SKU"]],
updateSKU?: [{	where:ValueTypes["SKUWhereUniqueInput"],	data:ValueTypes["SKUUpdateInput"]},ValueTypes["SKU"]],
updateSKUS?: [{	data:ValueTypes["SKUUpdateArgs"][]},ValueTypes["SKU"]],
deleteSKU?: [{	where:ValueTypes["SKUWhereUniqueInput"]},ValueTypes["SKU"]],
deleteSKUS?: [{	where:ValueTypes["SKUWhereUniqueInput"][]},ValueTypes["SKU"]],
createSKUValue?: [{	data:ValueTypes["SKUValueCreateInput"]},ValueTypes["SKUValue"]],
createSKUValues?: [{	data:ValueTypes["SKUValueCreateInput"][]},ValueTypes["SKUValue"]],
updateSKUValue?: [{	where:ValueTypes["SKUValueWhereUniqueInput"],	data:ValueTypes["SKUValueUpdateInput"]},ValueTypes["SKUValue"]],
updateSKUValues?: [{	data:ValueTypes["SKUValueUpdateArgs"][]},ValueTypes["SKUValue"]],
deleteSKUValue?: [{	where:ValueTypes["SKUValueWhereUniqueInput"]},ValueTypes["SKUValue"]],
deleteSKUValues?: [{	where:ValueTypes["SKUValueWhereUniqueInput"][]},ValueTypes["SKUValue"]],
createOption?: [{	data:ValueTypes["OptionCreateInput"]},ValueTypes["Option"]],
createOptions?: [{	data:ValueTypes["OptionCreateInput"][]},ValueTypes["Option"]],
updateOption?: [{	where:ValueTypes["OptionWhereUniqueInput"],	data:ValueTypes["OptionUpdateInput"]},ValueTypes["Option"]],
updateOptions?: [{	data:ValueTypes["OptionUpdateArgs"][]},ValueTypes["Option"]],
deleteOption?: [{	where:ValueTypes["OptionWhereUniqueInput"]},ValueTypes["Option"]],
deleteOptions?: [{	where:ValueTypes["OptionWhereUniqueInput"][]},ValueTypes["Option"]],
createOptionValue?: [{	data:ValueTypes["OptionValueCreateInput"]},ValueTypes["OptionValue"]],
createOptionValues?: [{	data:ValueTypes["OptionValueCreateInput"][]},ValueTypes["OptionValue"]],
updateOptionValue?: [{	where:ValueTypes["OptionValueWhereUniqueInput"],	data:ValueTypes["OptionValueUpdateInput"]},ValueTypes["OptionValue"]],
updateOptionValues?: [{	data:ValueTypes["OptionValueUpdateArgs"][]},ValueTypes["OptionValue"]],
deleteOptionValue?: [{	where:ValueTypes["OptionValueWhereUniqueInput"]},ValueTypes["OptionValue"]],
deleteOptionValues?: [{	where:ValueTypes["OptionValueWhereUniqueInput"][]},ValueTypes["OptionValue"]],
createOrder?: [{	data:ValueTypes["OrderCreateInput"]},ValueTypes["Order"]],
createOrders?: [{	data:ValueTypes["OrderCreateInput"][]},ValueTypes["Order"]],
updateOrder?: [{	where:ValueTypes["OrderWhereUniqueInput"],	data:ValueTypes["OrderUpdateInput"]},ValueTypes["Order"]],
updateOrders?: [{	data:ValueTypes["OrderUpdateArgs"][]},ValueTypes["Order"]],
deleteOrder?: [{	where:ValueTypes["OrderWhereUniqueInput"]},ValueTypes["Order"]],
deleteOrders?: [{	where:ValueTypes["OrderWhereUniqueInput"][]},ValueTypes["Order"]],
createOrderItem?: [{	data:ValueTypes["OrderItemCreateInput"]},ValueTypes["OrderItem"]],
createOrderItems?: [{	data:ValueTypes["OrderItemCreateInput"][]},ValueTypes["OrderItem"]],
updateOrderItem?: [{	where:ValueTypes["OrderItemWhereUniqueInput"],	data:ValueTypes["OrderItemUpdateInput"]},ValueTypes["OrderItem"]],
updateOrderItems?: [{	data:ValueTypes["OrderItemUpdateArgs"][]},ValueTypes["OrderItem"]],
deleteOrderItem?: [{	where:ValueTypes["OrderItemWhereUniqueInput"]},ValueTypes["OrderItem"]],
deleteOrderItems?: [{	where:ValueTypes["OrderItemWhereUniqueInput"][]},ValueTypes["OrderItem"]],
	endSession?:boolean,
authenticateUserWithPassword?: [{	email:string,	password:string},ValueTypes["UserAuthenticationWithPasswordResult"]],
createInitialUser?: [{	data:ValueTypes["CreateInitialUserInput"]},ValueTypes["UserAuthenticationWithPasswordSuccess"]],
sendUserPasswordResetLink?: [{	email:string},boolean],
redeemUserPasswordResetToken?: [{	email:string,	token:string,	password:string},ValueTypes["RedeemUserPasswordResetTokenResult"]],
		__typename?: boolean
}>;
	["UserAuthenticationWithPasswordResult"]: AliasType<{		["...on UserAuthenticationWithPasswordSuccess"] : ValueTypes["UserAuthenticationWithPasswordSuccess"],
		["...on UserAuthenticationWithPasswordFailure"] : ValueTypes["UserAuthenticationWithPasswordFailure"]
		__typename?: boolean
}>;
	["UserAuthenticationWithPasswordSuccess"]: AliasType<{
	sessionToken?:boolean,
	item?:ValueTypes["User"],
		__typename?: boolean
}>;
	["UserAuthenticationWithPasswordFailure"]: AliasType<{
	message?:boolean,
		__typename?: boolean
}>;
	["CreateInitialUserInput"]: {
	name?:string | null,
	email?:string | null,
	password?:string | null
};
	["RedeemUserPasswordResetTokenResult"]: AliasType<{
	code?:boolean,
	message?:boolean,
		__typename?: boolean
}>;
	["PasswordResetRedemptionErrorCode"]:PasswordResetRedemptionErrorCode;
	["Query"]: AliasType<{
users?: [{	where:ValueTypes["UserWhereInput"],	orderBy:ValueTypes["UserOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["User"]],
user?: [{	where:ValueTypes["UserWhereUniqueInput"]},ValueTypes["User"]],
usersCount?: [{	where:ValueTypes["UserWhereInput"]},boolean],
posts?: [{	where:ValueTypes["PostWhereInput"],	orderBy:ValueTypes["PostOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Post"]],
post?: [{	where:ValueTypes["PostWhereUniqueInput"]},ValueTypes["Post"]],
postsCount?: [{	where:ValueTypes["PostWhereInput"]},boolean],
products?: [{	where:ValueTypes["ProductWhereInput"],	orderBy:ValueTypes["ProductOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Product"]],
product?: [{	where:ValueTypes["ProductWhereUniqueInput"]},ValueTypes["Product"]],
productsCount?: [{	where:ValueTypes["ProductWhereInput"]},boolean],
cloudinaryImages?: [{	where:ValueTypes["CloudinaryImageWhereInput"],	orderBy:ValueTypes["CloudinaryImageOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["CloudinaryImage"]],
cloudinaryImage?: [{	where:ValueTypes["CloudinaryImageWhereUniqueInput"]},ValueTypes["CloudinaryImage"]],
cloudinaryImagesCount?: [{	where:ValueTypes["CloudinaryImageWhereInput"]},boolean],
images?: [{	where:ValueTypes["ImageWhereInput"],	orderBy:ValueTypes["ImageOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Image"]],
image?: [{	where:ValueTypes["ImageWhereUniqueInput"]},ValueTypes["Image"]],
imagesCount?: [{	where:ValueTypes["ImageWhereInput"]},boolean],
tags?: [{	where:ValueTypes["TagWhereInput"],	orderBy:ValueTypes["TagOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Tag"]],
tag?: [{	where:ValueTypes["TagWhereUniqueInput"]},ValueTypes["Tag"]],
tagsCount?: [{	where:ValueTypes["TagWhereInput"]},boolean],
categories?: [{	where:ValueTypes["CategoryWhereInput"],	orderBy:ValueTypes["CategoryOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Category"]],
category?: [{	where:ValueTypes["CategoryWhereUniqueInput"]},ValueTypes["Category"]],
categoriesCount?: [{	where:ValueTypes["CategoryWhereInput"]},boolean],
roles?: [{	where:ValueTypes["RoleWhereInput"],	orderBy:ValueTypes["RoleOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Role"]],
role?: [{	where:ValueTypes["RoleWhereUniqueInput"]},ValueTypes["Role"]],
rolesCount?: [{	where:ValueTypes["RoleWhereInput"]},boolean],
sKUS?: [{	where:ValueTypes["SKUWhereInput"],	orderBy:ValueTypes["SKUOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["SKU"]],
sKU?: [{	where:ValueTypes["SKUWhereUniqueInput"]},ValueTypes["SKU"]],
sKUSCount?: [{	where:ValueTypes["SKUWhereInput"]},boolean],
sKUValues?: [{	where:ValueTypes["SKUValueWhereInput"],	orderBy:ValueTypes["SKUValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["SKUValue"]],
sKUValue?: [{	where:ValueTypes["SKUValueWhereUniqueInput"]},ValueTypes["SKUValue"]],
sKUValuesCount?: [{	where:ValueTypes["SKUValueWhereInput"]},boolean],
options?: [{	where:ValueTypes["OptionWhereInput"],	orderBy:ValueTypes["OptionOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Option"]],
option?: [{	where:ValueTypes["OptionWhereUniqueInput"]},ValueTypes["Option"]],
optionsCount?: [{	where:ValueTypes["OptionWhereInput"]},boolean],
optionValues?: [{	where:ValueTypes["OptionValueWhereInput"],	orderBy:ValueTypes["OptionValueOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OptionValue"]],
optionValue?: [{	where:ValueTypes["OptionValueWhereUniqueInput"]},ValueTypes["OptionValue"]],
optionValuesCount?: [{	where:ValueTypes["OptionValueWhereInput"]},boolean],
orders?: [{	where:ValueTypes["OrderWhereInput"],	orderBy:ValueTypes["OrderOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Order"]],
order?: [{	where:ValueTypes["OrderWhereUniqueInput"]},ValueTypes["Order"]],
ordersCount?: [{	where:ValueTypes["OrderWhereInput"]},boolean],
orderItems?: [{	where:ValueTypes["OrderItemWhereInput"],	orderBy:ValueTypes["OrderItemOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["OrderItem"]],
orderItem?: [{	where:ValueTypes["OrderItemWhereUniqueInput"]},ValueTypes["OrderItem"]],
orderItemsCount?: [{	where:ValueTypes["OrderItemWhereInput"]},boolean],
	keystone?:ValueTypes["KeystoneMeta"],
	authenticatedItem?:ValueTypes["AuthenticatedItem"],
validateUserPasswordResetToken?: [{	email:string,	token:string},ValueTypes["ValidateUserPasswordResetTokenResult"]],
		__typename?: boolean
}>;
	["AuthenticatedItem"]: AliasType<{		["...on User"] : ValueTypes["User"]
		__typename?: boolean
}>;
	["ValidateUserPasswordResetTokenResult"]: AliasType<{
	code?:boolean,
	message?:boolean,
		__typename?: boolean
}>;
	["KeystoneMeta"]: AliasType<{
	adminMeta?:ValueTypes["KeystoneAdminMeta"],
		__typename?: boolean
}>;
	["KeystoneAdminMeta"]: AliasType<{
	enableSignout?:boolean,
	enableSessionItem?:boolean,
	lists?:ValueTypes["KeystoneAdminUIListMeta"],
list?: [{	key:string},ValueTypes["KeystoneAdminUIListMeta"]],
		__typename?: boolean
}>;
	["KeystoneAdminUIListMeta"]: AliasType<{
	key?:boolean,
	itemQueryName?:boolean,
	listQueryName?:boolean,
	hideCreate?:boolean,
	hideDelete?:boolean,
	path?:boolean,
	label?:boolean,
	singular?:boolean,
	plural?:boolean,
	description?:boolean,
	initialColumns?:boolean,
	pageSize?:boolean,
	labelField?:boolean,
	fields?:ValueTypes["KeystoneAdminUIFieldMeta"],
	initialSort?:ValueTypes["KeystoneAdminUISort"],
	isHidden?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUIFieldMeta"]: AliasType<{
	path?:boolean,
	label?:boolean,
	isOrderable?:boolean,
	isFilterable?:boolean,
	fieldMeta?:boolean,
	viewsIndex?:boolean,
	customViewsIndex?:boolean,
	createView?:ValueTypes["KeystoneAdminUIFieldMetaCreateView"],
	listView?:ValueTypes["KeystoneAdminUIFieldMetaListView"],
itemView?: [{	id?:string | null},ValueTypes["KeystoneAdminUIFieldMetaItemView"]],
	search?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUIFieldMetaCreateView"]: AliasType<{
	fieldMode?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUIFieldMetaCreateViewFieldMode"]:KeystoneAdminUIFieldMetaCreateViewFieldMode;
	["KeystoneAdminUIFieldMetaListView"]: AliasType<{
	fieldMode?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUIFieldMetaListViewFieldMode"]:KeystoneAdminUIFieldMetaListViewFieldMode;
	["KeystoneAdminUIFieldMetaItemView"]: AliasType<{
	fieldMode?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUIFieldMetaItemViewFieldMode"]:KeystoneAdminUIFieldMetaItemViewFieldMode;
	["KeystoneAdminUISort"]: AliasType<{
	field?:boolean,
	direction?:boolean,
		__typename?: boolean
}>;
	["KeystoneAdminUISortDirection"]:KeystoneAdminUISortDirection
  }

export type ModelTypes = {
    ["User"]: {
		id:string,
	name?:string,
	email?:string,
	oauthProvider?:ModelTypes["UserOauthProviderType"],
	oauthProfileId?:string,
	password?:ModelTypes["PasswordState"],
	posts?:ModelTypes["Post"][],
	postsCount?:number,
	products?:ModelTypes["Product"][],
	productsCount?:number,
	role?:ModelTypes["Role"],
	orders?:ModelTypes["Order"][],
	ordersCount?:number,
	passwordResetToken?:ModelTypes["PasswordState"],
	passwordResetIssuedAt?:ModelTypes["DateTime"],
	passwordResetRedeemedAt?:ModelTypes["DateTime"]
};
	["UserOauthProviderType"]: GraphQLTypes["UserOauthProviderType"];
	["PasswordState"]: {
		isSet:boolean
};
	["DateTime"]:any;
	["UserWhereUniqueInput"]: GraphQLTypes["UserWhereUniqueInput"];
	["UserWhereInput"]: GraphQLTypes["UserWhereInput"];
	["IDFilter"]: GraphQLTypes["IDFilter"];
	["StringFilter"]: GraphQLTypes["StringFilter"];
	["QueryMode"]: GraphQLTypes["QueryMode"];
	["NestedStringFilter"]: GraphQLTypes["NestedStringFilter"];
	["UserOauthProviderTypeNullableFilter"]: GraphQLTypes["UserOauthProviderTypeNullableFilter"];
	["PostManyRelationFilter"]: GraphQLTypes["PostManyRelationFilter"];
	["ProductManyRelationFilter"]: GraphQLTypes["ProductManyRelationFilter"];
	["OrderManyRelationFilter"]: GraphQLTypes["OrderManyRelationFilter"];
	["PasswordFilter"]: GraphQLTypes["PasswordFilter"];
	["DateTimeNullableFilter"]: GraphQLTypes["DateTimeNullableFilter"];
	["UserOrderByInput"]: GraphQLTypes["UserOrderByInput"];
	["OrderDirection"]: GraphQLTypes["OrderDirection"];
	["UserUpdateInput"]: GraphQLTypes["UserUpdateInput"];
	["PostRelateToManyForUpdateInput"]: GraphQLTypes["PostRelateToManyForUpdateInput"];
	["ProductRelateToManyForUpdateInput"]: GraphQLTypes["ProductRelateToManyForUpdateInput"];
	["RoleRelateToOneForUpdateInput"]: GraphQLTypes["RoleRelateToOneForUpdateInput"];
	["OrderRelateToManyForUpdateInput"]: GraphQLTypes["OrderRelateToManyForUpdateInput"];
	["UserUpdateArgs"]: GraphQLTypes["UserUpdateArgs"];
	["UserCreateInput"]: GraphQLTypes["UserCreateInput"];
	["PostRelateToManyForCreateInput"]: GraphQLTypes["PostRelateToManyForCreateInput"];
	["ProductRelateToManyForCreateInput"]: GraphQLTypes["ProductRelateToManyForCreateInput"];
	["RoleRelateToOneForCreateInput"]: GraphQLTypes["RoleRelateToOneForCreateInput"];
	["OrderRelateToManyForCreateInput"]: GraphQLTypes["OrderRelateToManyForCreateInput"];
	["Post"]: {
		id:string,
	title?:string,
	status?:string,
	content?:ModelTypes["Post_content_Document"],
	publishDate?:ModelTypes["DateTime"],
	author?:ModelTypes["User"],
	tags?:ModelTypes["Tag"][],
	tagsCount?:number
};
	["Post_content_Document"]: {
		document:ModelTypes["JSON"]
};
	["PostWhereUniqueInput"]: GraphQLTypes["PostWhereUniqueInput"];
	["PostWhereInput"]: GraphQLTypes["PostWhereInput"];
	["StringNullableFilter"]: GraphQLTypes["StringNullableFilter"];
	["NestedStringNullableFilter"]: GraphQLTypes["NestedStringNullableFilter"];
	["TagManyRelationFilter"]: GraphQLTypes["TagManyRelationFilter"];
	["PostOrderByInput"]: GraphQLTypes["PostOrderByInput"];
	["PostUpdateInput"]: GraphQLTypes["PostUpdateInput"];
	["UserRelateToOneForUpdateInput"]: GraphQLTypes["UserRelateToOneForUpdateInput"];
	["TagRelateToManyForUpdateInput"]: GraphQLTypes["TagRelateToManyForUpdateInput"];
	["PostUpdateArgs"]: GraphQLTypes["PostUpdateArgs"];
	["PostCreateInput"]: GraphQLTypes["PostCreateInput"];
	["UserRelateToOneForCreateInput"]: GraphQLTypes["UserRelateToOneForCreateInput"];
	["TagRelateToManyForCreateInput"]: GraphQLTypes["TagRelateToManyForCreateInput"];
	["Product"]: {
		id:string,
	name?:string,
	description?:string,
	handle?:string,
	cloudinaryPhotos?:ModelTypes["CloudinaryImage"][],
	cloudinaryPhotosCount?:number,
	price?:number,
	photos?:ModelTypes["Image"][],
	photosCount?:number,
	status?:string,
	user?:ModelTypes["User"],
	skus?:ModelTypes["SKU"][],
	skusCount?:number,
	availableForSale?:boolean,
	skuValues?:ModelTypes["SKUValue"][],
	skuValuesCount?:number,
	options?:ModelTypes["Option"][],
	optionsCount?:number,
	optionValues?:ModelTypes["OptionValue"][],
	optionValuesCount?:number,
	category?:ModelTypes["Category"]
};
	["ProductWhereUniqueInput"]: GraphQLTypes["ProductWhereUniqueInput"];
	["ProductWhereInput"]: GraphQLTypes["ProductWhereInput"];
	["CloudinaryImageManyRelationFilter"]: GraphQLTypes["CloudinaryImageManyRelationFilter"];
	["IntNullableFilter"]: GraphQLTypes["IntNullableFilter"];
	["ImageManyRelationFilter"]: GraphQLTypes["ImageManyRelationFilter"];
	["SKUManyRelationFilter"]: GraphQLTypes["SKUManyRelationFilter"];
	["BooleanFilter"]: GraphQLTypes["BooleanFilter"];
	["SKUValueManyRelationFilter"]: GraphQLTypes["SKUValueManyRelationFilter"];
	["OptionManyRelationFilter"]: GraphQLTypes["OptionManyRelationFilter"];
	["OptionValueManyRelationFilter"]: GraphQLTypes["OptionValueManyRelationFilter"];
	["ProductOrderByInput"]: GraphQLTypes["ProductOrderByInput"];
	["ProductUpdateInput"]: GraphQLTypes["ProductUpdateInput"];
	["CloudinaryImageRelateToManyForUpdateInput"]: GraphQLTypes["CloudinaryImageRelateToManyForUpdateInput"];
	["ImageRelateToManyForUpdateInput"]: GraphQLTypes["ImageRelateToManyForUpdateInput"];
	["SKURelateToManyForUpdateInput"]: GraphQLTypes["SKURelateToManyForUpdateInput"];
	["SKUValueRelateToManyForUpdateInput"]: GraphQLTypes["SKUValueRelateToManyForUpdateInput"];
	["OptionRelateToManyForUpdateInput"]: GraphQLTypes["OptionRelateToManyForUpdateInput"];
	["OptionValueRelateToManyForUpdateInput"]: GraphQLTypes["OptionValueRelateToManyForUpdateInput"];
	["CategoryRelateToOneForUpdateInput"]: GraphQLTypes["CategoryRelateToOneForUpdateInput"];
	["ProductUpdateArgs"]: GraphQLTypes["ProductUpdateArgs"];
	["ProductCreateInput"]: GraphQLTypes["ProductCreateInput"];
	["CloudinaryImageRelateToManyForCreateInput"]: GraphQLTypes["CloudinaryImageRelateToManyForCreateInput"];
	["ImageRelateToManyForCreateInput"]: GraphQLTypes["ImageRelateToManyForCreateInput"];
	["SKURelateToManyForCreateInput"]: GraphQLTypes["SKURelateToManyForCreateInput"];
	["SKUValueRelateToManyForCreateInput"]: GraphQLTypes["SKUValueRelateToManyForCreateInput"];
	["OptionRelateToManyForCreateInput"]: GraphQLTypes["OptionRelateToManyForCreateInput"];
	["OptionValueRelateToManyForCreateInput"]: GraphQLTypes["OptionValueRelateToManyForCreateInput"];
	["CategoryRelateToOneForCreateInput"]: GraphQLTypes["CategoryRelateToOneForCreateInput"];
	["CloudinaryImage"]: {
		id:string,
	image?:ModelTypes["CloudinaryImage_File"],
	altText?:string,
	product?:ModelTypes["Product"],
	option?:ModelTypes["Option"],
	optionValue?:ModelTypes["OptionValue"]
};
	["CloudinaryImage_File"]: {
		id?:string,
	filename?:string,
	originalFilename?:string,
	mimetype?:string,
	encoding?:string,
	publicUrl?:string,
	publicUrlTransformed?:string
};
	/** Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
All options are strings as they ultimately end up in a URL. */
["CloudinaryImageFormat"]: GraphQLTypes["CloudinaryImageFormat"];
	["CloudinaryImageWhereUniqueInput"]: GraphQLTypes["CloudinaryImageWhereUniqueInput"];
	["CloudinaryImageWhereInput"]: GraphQLTypes["CloudinaryImageWhereInput"];
	["CloudinaryImageOrderByInput"]: GraphQLTypes["CloudinaryImageOrderByInput"];
	["CloudinaryImageUpdateInput"]: GraphQLTypes["CloudinaryImageUpdateInput"];
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:any;
	["ProductRelateToOneForUpdateInput"]: GraphQLTypes["ProductRelateToOneForUpdateInput"];
	["OptionRelateToOneForUpdateInput"]: GraphQLTypes["OptionRelateToOneForUpdateInput"];
	["OptionValueRelateToOneForUpdateInput"]: GraphQLTypes["OptionValueRelateToOneForUpdateInput"];
	["CloudinaryImageUpdateArgs"]: GraphQLTypes["CloudinaryImageUpdateArgs"];
	["CloudinaryImageCreateInput"]: GraphQLTypes["CloudinaryImageCreateInput"];
	["ProductRelateToOneForCreateInput"]: GraphQLTypes["ProductRelateToOneForCreateInput"];
	["OptionRelateToOneForCreateInput"]: GraphQLTypes["OptionRelateToOneForCreateInput"];
	["OptionValueRelateToOneForCreateInput"]: GraphQLTypes["OptionValueRelateToOneForCreateInput"];
	["Image"]: {
		id:string,
	src?:string,
	altText?:string,
	product?:ModelTypes["Product"],
	option?:ModelTypes["Option"],
	optionValue?:ModelTypes["OptionValue"]
};
	["ImageWhereUniqueInput"]: GraphQLTypes["ImageWhereUniqueInput"];
	["ImageWhereInput"]: GraphQLTypes["ImageWhereInput"];
	["ImageOrderByInput"]: GraphQLTypes["ImageOrderByInput"];
	["ImageUpdateInput"]: GraphQLTypes["ImageUpdateInput"];
	["ImageUpdateArgs"]: GraphQLTypes["ImageUpdateArgs"];
	["ImageCreateInput"]: GraphQLTypes["ImageCreateInput"];
	["Tag"]: {
		id:string,
	name?:string,
	posts?:ModelTypes["Post"][],
	postsCount?:number
};
	["TagWhereUniqueInput"]: GraphQLTypes["TagWhereUniqueInput"];
	["TagWhereInput"]: GraphQLTypes["TagWhereInput"];
	["TagOrderByInput"]: GraphQLTypes["TagOrderByInput"];
	["TagUpdateInput"]: GraphQLTypes["TagUpdateInput"];
	["TagUpdateArgs"]: GraphQLTypes["TagUpdateArgs"];
	["TagCreateInput"]: GraphQLTypes["TagCreateInput"];
	["Category"]: {
		id:string,
	name?:string
};
	["CategoryWhereUniqueInput"]: GraphQLTypes["CategoryWhereUniqueInput"];
	["CategoryWhereInput"]: GraphQLTypes["CategoryWhereInput"];
	["CategoryOrderByInput"]: GraphQLTypes["CategoryOrderByInput"];
	["CategoryUpdateInput"]: GraphQLTypes["CategoryUpdateInput"];
	["CategoryUpdateArgs"]: GraphQLTypes["CategoryUpdateArgs"];
	["CategoryCreateInput"]: GraphQLTypes["CategoryCreateInput"];
	["Role"]: {
		id:string,
	name?:string,
	canManageProducts?:boolean,
	canSeeOtherUsers?:boolean,
	canManageUsers?:boolean,
	canManageRoles?:boolean,
	canManageCart?:boolean,
	canManageOrders?:boolean,
	assignedTo?:ModelTypes["User"][],
	assignedToCount?:number
};
	["RoleWhereUniqueInput"]: GraphQLTypes["RoleWhereUniqueInput"];
	["RoleWhereInput"]: GraphQLTypes["RoleWhereInput"];
	["UserManyRelationFilter"]: GraphQLTypes["UserManyRelationFilter"];
	["RoleOrderByInput"]: GraphQLTypes["RoleOrderByInput"];
	["RoleUpdateInput"]: GraphQLTypes["RoleUpdateInput"];
	["UserRelateToManyForUpdateInput"]: GraphQLTypes["UserRelateToManyForUpdateInput"];
	["RoleUpdateArgs"]: GraphQLTypes["RoleUpdateArgs"];
	["RoleCreateInput"]: GraphQLTypes["RoleCreateInput"];
	["UserRelateToManyForCreateInput"]: GraphQLTypes["UserRelateToManyForCreateInput"];
	["SKU"]: {
		id:string,
	sku?:string,
	product?:ModelTypes["Product"],
	stock?:number
};
	["SKUWhereUniqueInput"]: GraphQLTypes["SKUWhereUniqueInput"];
	["SKUWhereInput"]: GraphQLTypes["SKUWhereInput"];
	["SKUOrderByInput"]: GraphQLTypes["SKUOrderByInput"];
	["SKUUpdateInput"]: GraphQLTypes["SKUUpdateInput"];
	["SKUUpdateArgs"]: GraphQLTypes["SKUUpdateArgs"];
	["SKUCreateInput"]: GraphQLTypes["SKUCreateInput"];
	["SKUValue"]: {
		id:string,
	product?:ModelTypes["Product"],
	SKU?:ModelTypes["SKU"],
	options?:ModelTypes["Option"][],
	optionsCount?:number,
	optionValues?:ModelTypes["OptionValue"][],
	optionValuesCount?:number
};
	["SKUValueWhereUniqueInput"]: GraphQLTypes["SKUValueWhereUniqueInput"];
	["SKUValueWhereInput"]: GraphQLTypes["SKUValueWhereInput"];
	["SKUValueOrderByInput"]: GraphQLTypes["SKUValueOrderByInput"];
	["SKUValueUpdateInput"]: GraphQLTypes["SKUValueUpdateInput"];
	["SKURelateToOneForUpdateInput"]: GraphQLTypes["SKURelateToOneForUpdateInput"];
	["SKUValueUpdateArgs"]: GraphQLTypes["SKUValueUpdateArgs"];
	["SKUValueCreateInput"]: GraphQLTypes["SKUValueCreateInput"];
	["SKURelateToOneForCreateInput"]: GraphQLTypes["SKURelateToOneForCreateInput"];
	["Option"]: {
		id:string,
	name?:string,
	values?:ModelTypes["OptionValue"][],
	valuesCount?:number,
	product?:ModelTypes["Product"]
};
	["OptionWhereUniqueInput"]: GraphQLTypes["OptionWhereUniqueInput"];
	["OptionWhereInput"]: GraphQLTypes["OptionWhereInput"];
	["OptionOrderByInput"]: GraphQLTypes["OptionOrderByInput"];
	["OptionUpdateInput"]: GraphQLTypes["OptionUpdateInput"];
	["OptionUpdateArgs"]: GraphQLTypes["OptionUpdateArgs"];
	["OptionCreateInput"]: GraphQLTypes["OptionCreateInput"];
	["OptionValue"]: {
		id:string,
	name?:string,
	product?:ModelTypes["Product"],
	option?:ModelTypes["Option"]
};
	["OptionValueWhereUniqueInput"]: GraphQLTypes["OptionValueWhereUniqueInput"];
	["OptionValueWhereInput"]: GraphQLTypes["OptionValueWhereInput"];
	["OptionValueOrderByInput"]: GraphQLTypes["OptionValueOrderByInput"];
	["OptionValueUpdateInput"]: GraphQLTypes["OptionValueUpdateInput"];
	["OptionValueUpdateArgs"]: GraphQLTypes["OptionValueUpdateArgs"];
	["OptionValueCreateInput"]: GraphQLTypes["OptionValueCreateInput"];
	["Order"]: {
		id:string,
	label?:string,
	total?:number,
	items?:ModelTypes["OrderItem"][],
	itemsCount?:number,
	user?:ModelTypes["User"],
	charge?:string
};
	["OrderWhereUniqueInput"]: GraphQLTypes["OrderWhereUniqueInput"];
	["OrderWhereInput"]: GraphQLTypes["OrderWhereInput"];
	["OrderItemManyRelationFilter"]: GraphQLTypes["OrderItemManyRelationFilter"];
	["OrderOrderByInput"]: GraphQLTypes["OrderOrderByInput"];
	["OrderUpdateInput"]: GraphQLTypes["OrderUpdateInput"];
	["OrderItemRelateToManyForUpdateInput"]: GraphQLTypes["OrderItemRelateToManyForUpdateInput"];
	["OrderUpdateArgs"]: GraphQLTypes["OrderUpdateArgs"];
	["OrderCreateInput"]: GraphQLTypes["OrderCreateInput"];
	["OrderItemRelateToManyForCreateInput"]: GraphQLTypes["OrderItemRelateToManyForCreateInput"];
	["OrderItem"]: {
		id:string,
	name?:string,
	description?:string,
	cloudinaryImage?:ModelTypes["CloudinaryImage"],
	image?:ModelTypes["Image"],
	price?:number,
	quantity?:number,
	order?:ModelTypes["Order"]
};
	["OrderItemWhereUniqueInput"]: GraphQLTypes["OrderItemWhereUniqueInput"];
	["OrderItemWhereInput"]: GraphQLTypes["OrderItemWhereInput"];
	["OrderItemOrderByInput"]: GraphQLTypes["OrderItemOrderByInput"];
	["OrderItemUpdateInput"]: GraphQLTypes["OrderItemUpdateInput"];
	["CloudinaryImageRelateToOneForUpdateInput"]: GraphQLTypes["CloudinaryImageRelateToOneForUpdateInput"];
	["ImageRelateToOneForUpdateInput"]: GraphQLTypes["ImageRelateToOneForUpdateInput"];
	["OrderRelateToOneForUpdateInput"]: GraphQLTypes["OrderRelateToOneForUpdateInput"];
	["OrderItemUpdateArgs"]: GraphQLTypes["OrderItemUpdateArgs"];
	["OrderItemCreateInput"]: GraphQLTypes["OrderItemCreateInput"];
	["CloudinaryImageRelateToOneForCreateInput"]: GraphQLTypes["CloudinaryImageRelateToOneForCreateInput"];
	["ImageRelateToOneForCreateInput"]: GraphQLTypes["ImageRelateToOneForCreateInput"];
	["OrderRelateToOneForCreateInput"]: GraphQLTypes["OrderRelateToOneForCreateInput"];
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:any;
	["Mutation"]: {
		createUser?:ModelTypes["User"],
	createUsers?:(ModelTypes["User"] | undefined)[],
	updateUser?:ModelTypes["User"],
	updateUsers?:(ModelTypes["User"] | undefined)[],
	deleteUser?:ModelTypes["User"],
	deleteUsers?:(ModelTypes["User"] | undefined)[],
	createPost?:ModelTypes["Post"],
	createPosts?:(ModelTypes["Post"] | undefined)[],
	updatePost?:ModelTypes["Post"],
	updatePosts?:(ModelTypes["Post"] | undefined)[],
	deletePost?:ModelTypes["Post"],
	deletePosts?:(ModelTypes["Post"] | undefined)[],
	createProduct?:ModelTypes["Product"],
	createProducts?:(ModelTypes["Product"] | undefined)[],
	updateProduct?:ModelTypes["Product"],
	updateProducts?:(ModelTypes["Product"] | undefined)[],
	deleteProduct?:ModelTypes["Product"],
	deleteProducts?:(ModelTypes["Product"] | undefined)[],
	createCloudinaryImage?:ModelTypes["CloudinaryImage"],
	createCloudinaryImages?:(ModelTypes["CloudinaryImage"] | undefined)[],
	updateCloudinaryImage?:ModelTypes["CloudinaryImage"],
	updateCloudinaryImages?:(ModelTypes["CloudinaryImage"] | undefined)[],
	deleteCloudinaryImage?:ModelTypes["CloudinaryImage"],
	deleteCloudinaryImages?:(ModelTypes["CloudinaryImage"] | undefined)[],
	createImage?:ModelTypes["Image"],
	createImages?:(ModelTypes["Image"] | undefined)[],
	updateImage?:ModelTypes["Image"],
	updateImages?:(ModelTypes["Image"] | undefined)[],
	deleteImage?:ModelTypes["Image"],
	deleteImages?:(ModelTypes["Image"] | undefined)[],
	createTag?:ModelTypes["Tag"],
	createTags?:(ModelTypes["Tag"] | undefined)[],
	updateTag?:ModelTypes["Tag"],
	updateTags?:(ModelTypes["Tag"] | undefined)[],
	deleteTag?:ModelTypes["Tag"],
	deleteTags?:(ModelTypes["Tag"] | undefined)[],
	createCategory?:ModelTypes["Category"],
	createCategories?:(ModelTypes["Category"] | undefined)[],
	updateCategory?:ModelTypes["Category"],
	updateCategories?:(ModelTypes["Category"] | undefined)[],
	deleteCategory?:ModelTypes["Category"],
	deleteCategories?:(ModelTypes["Category"] | undefined)[],
	createRole?:ModelTypes["Role"],
	createRoles?:(ModelTypes["Role"] | undefined)[],
	updateRole?:ModelTypes["Role"],
	updateRoles?:(ModelTypes["Role"] | undefined)[],
	deleteRole?:ModelTypes["Role"],
	deleteRoles?:(ModelTypes["Role"] | undefined)[],
	createSKU?:ModelTypes["SKU"],
	createSKUS?:(ModelTypes["SKU"] | undefined)[],
	updateSKU?:ModelTypes["SKU"],
	updateSKUS?:(ModelTypes["SKU"] | undefined)[],
	deleteSKU?:ModelTypes["SKU"],
	deleteSKUS?:(ModelTypes["SKU"] | undefined)[],
	createSKUValue?:ModelTypes["SKUValue"],
	createSKUValues?:(ModelTypes["SKUValue"] | undefined)[],
	updateSKUValue?:ModelTypes["SKUValue"],
	updateSKUValues?:(ModelTypes["SKUValue"] | undefined)[],
	deleteSKUValue?:ModelTypes["SKUValue"],
	deleteSKUValues?:(ModelTypes["SKUValue"] | undefined)[],
	createOption?:ModelTypes["Option"],
	createOptions?:(ModelTypes["Option"] | undefined)[],
	updateOption?:ModelTypes["Option"],
	updateOptions?:(ModelTypes["Option"] | undefined)[],
	deleteOption?:ModelTypes["Option"],
	deleteOptions?:(ModelTypes["Option"] | undefined)[],
	createOptionValue?:ModelTypes["OptionValue"],
	createOptionValues?:(ModelTypes["OptionValue"] | undefined)[],
	updateOptionValue?:ModelTypes["OptionValue"],
	updateOptionValues?:(ModelTypes["OptionValue"] | undefined)[],
	deleteOptionValue?:ModelTypes["OptionValue"],
	deleteOptionValues?:(ModelTypes["OptionValue"] | undefined)[],
	createOrder?:ModelTypes["Order"],
	createOrders?:(ModelTypes["Order"] | undefined)[],
	updateOrder?:ModelTypes["Order"],
	updateOrders?:(ModelTypes["Order"] | undefined)[],
	deleteOrder?:ModelTypes["Order"],
	deleteOrders?:(ModelTypes["Order"] | undefined)[],
	createOrderItem?:ModelTypes["OrderItem"],
	createOrderItems?:(ModelTypes["OrderItem"] | undefined)[],
	updateOrderItem?:ModelTypes["OrderItem"],
	updateOrderItems?:(ModelTypes["OrderItem"] | undefined)[],
	deleteOrderItem?:ModelTypes["OrderItem"],
	deleteOrderItems?:(ModelTypes["OrderItem"] | undefined)[],
	endSession:boolean,
	authenticateUserWithPassword?:ModelTypes["UserAuthenticationWithPasswordResult"],
	createInitialUser:ModelTypes["UserAuthenticationWithPasswordSuccess"],
	sendUserPasswordResetLink:boolean,
	redeemUserPasswordResetToken?:ModelTypes["RedeemUserPasswordResetTokenResult"]
};
	["UserAuthenticationWithPasswordResult"]:ModelTypes["UserAuthenticationWithPasswordSuccess"] | ModelTypes["UserAuthenticationWithPasswordFailure"];
	["UserAuthenticationWithPasswordSuccess"]: {
		sessionToken:string,
	item:ModelTypes["User"]
};
	["UserAuthenticationWithPasswordFailure"]: {
		message:string
};
	["CreateInitialUserInput"]: GraphQLTypes["CreateInitialUserInput"];
	["RedeemUserPasswordResetTokenResult"]: {
		code:ModelTypes["PasswordResetRedemptionErrorCode"],
	message:string
};
	["PasswordResetRedemptionErrorCode"]: GraphQLTypes["PasswordResetRedemptionErrorCode"];
	["Query"]: {
		users?:ModelTypes["User"][],
	user?:ModelTypes["User"],
	usersCount?:number,
	posts?:ModelTypes["Post"][],
	post?:ModelTypes["Post"],
	postsCount?:number,
	products?:ModelTypes["Product"][],
	product?:ModelTypes["Product"],
	productsCount?:number,
	cloudinaryImages?:ModelTypes["CloudinaryImage"][],
	cloudinaryImage?:ModelTypes["CloudinaryImage"],
	cloudinaryImagesCount?:number,
	images?:ModelTypes["Image"][],
	image?:ModelTypes["Image"],
	imagesCount?:number,
	tags?:ModelTypes["Tag"][],
	tag?:ModelTypes["Tag"],
	tagsCount?:number,
	categories?:ModelTypes["Category"][],
	category?:ModelTypes["Category"],
	categoriesCount?:number,
	roles?:ModelTypes["Role"][],
	role?:ModelTypes["Role"],
	rolesCount?:number,
	sKUS?:ModelTypes["SKU"][],
	sKU?:ModelTypes["SKU"],
	sKUSCount?:number,
	sKUValues?:ModelTypes["SKUValue"][],
	sKUValue?:ModelTypes["SKUValue"],
	sKUValuesCount?:number,
	options?:ModelTypes["Option"][],
	option?:ModelTypes["Option"],
	optionsCount?:number,
	optionValues?:ModelTypes["OptionValue"][],
	optionValue?:ModelTypes["OptionValue"],
	optionValuesCount?:number,
	orders?:ModelTypes["Order"][],
	order?:ModelTypes["Order"],
	ordersCount?:number,
	orderItems?:ModelTypes["OrderItem"][],
	orderItem?:ModelTypes["OrderItem"],
	orderItemsCount?:number,
	keystone:ModelTypes["KeystoneMeta"],
	authenticatedItem?:ModelTypes["AuthenticatedItem"],
	validateUserPasswordResetToken?:ModelTypes["ValidateUserPasswordResetTokenResult"]
};
	["AuthenticatedItem"]:ModelTypes["User"];
	["ValidateUserPasswordResetTokenResult"]: {
		code:ModelTypes["PasswordResetRedemptionErrorCode"],
	message:string
};
	["KeystoneMeta"]: {
		adminMeta:ModelTypes["KeystoneAdminMeta"]
};
	["KeystoneAdminMeta"]: {
		enableSignout:boolean,
	enableSessionItem:boolean,
	lists:ModelTypes["KeystoneAdminUIListMeta"][],
	list?:ModelTypes["KeystoneAdminUIListMeta"]
};
	["KeystoneAdminUIListMeta"]: {
		key:string,
	itemQueryName:string,
	listQueryName:string,
	hideCreate:boolean,
	hideDelete:boolean,
	path:string,
	label:string,
	singular:string,
	plural:string,
	description?:string,
	initialColumns:string[],
	pageSize:number,
	labelField:string,
	fields:ModelTypes["KeystoneAdminUIFieldMeta"][],
	initialSort?:ModelTypes["KeystoneAdminUISort"],
	isHidden:boolean
};
	["KeystoneAdminUIFieldMeta"]: {
		path:string,
	label:string,
	isOrderable:boolean,
	isFilterable:boolean,
	fieldMeta?:ModelTypes["JSON"],
	viewsIndex:number,
	customViewsIndex?:number,
	createView:ModelTypes["KeystoneAdminUIFieldMetaCreateView"],
	listView:ModelTypes["KeystoneAdminUIFieldMetaListView"],
	itemView?:ModelTypes["KeystoneAdminUIFieldMetaItemView"],
	search?:ModelTypes["QueryMode"]
};
	["KeystoneAdminUIFieldMetaCreateView"]: {
		fieldMode:ModelTypes["KeystoneAdminUIFieldMetaCreateViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaCreateViewFieldMode"]: GraphQLTypes["KeystoneAdminUIFieldMetaCreateViewFieldMode"];
	["KeystoneAdminUIFieldMetaListView"]: {
		fieldMode:ModelTypes["KeystoneAdminUIFieldMetaListViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaListViewFieldMode"]: GraphQLTypes["KeystoneAdminUIFieldMetaListViewFieldMode"];
	["KeystoneAdminUIFieldMetaItemView"]: {
		fieldMode?:ModelTypes["KeystoneAdminUIFieldMetaItemViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaItemViewFieldMode"]: GraphQLTypes["KeystoneAdminUIFieldMetaItemViewFieldMode"];
	["KeystoneAdminUISort"]: {
		field:string,
	direction:ModelTypes["KeystoneAdminUISortDirection"]
};
	["KeystoneAdminUISortDirection"]: GraphQLTypes["KeystoneAdminUISortDirection"]
    }

export type GraphQLTypes = {
    ["User"]: {
	__typename: "User",
	id: string,
	name?: string,
	email?: string,
	oauthProvider?: GraphQLTypes["UserOauthProviderType"],
	oauthProfileId?: string,
	password?: GraphQLTypes["PasswordState"],
	posts?: Array<GraphQLTypes["Post"]>,
	postsCount?: number,
	products?: Array<GraphQLTypes["Product"]>,
	productsCount?: number,
	role?: GraphQLTypes["Role"],
	orders?: Array<GraphQLTypes["Order"]>,
	ordersCount?: number,
	passwordResetToken?: GraphQLTypes["PasswordState"],
	passwordResetIssuedAt?: GraphQLTypes["DateTime"],
	passwordResetRedeemedAt?: GraphQLTypes["DateTime"]
};
	["UserOauthProviderType"]: UserOauthProviderType;
	["PasswordState"]: {
	__typename: "PasswordState",
	isSet: boolean
};
	["DateTime"]:any;
	["UserWhereUniqueInput"]: {
		id?: string,
	email?: string
};
	["UserWhereInput"]: {
		AND?: Array<GraphQLTypes["UserWhereInput"]>,
	OR?: Array<GraphQLTypes["UserWhereInput"]>,
	NOT?: Array<GraphQLTypes["UserWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	email?: GraphQLTypes["StringFilter"],
	oauthProvider?: GraphQLTypes["UserOauthProviderTypeNullableFilter"],
	oauthProfileId?: GraphQLTypes["StringFilter"],
	posts?: GraphQLTypes["PostManyRelationFilter"],
	products?: GraphQLTypes["ProductManyRelationFilter"],
	role?: GraphQLTypes["RoleWhereInput"],
	orders?: GraphQLTypes["OrderManyRelationFilter"],
	passwordResetToken?: GraphQLTypes["PasswordFilter"],
	passwordResetIssuedAt?: GraphQLTypes["DateTimeNullableFilter"],
	passwordResetRedeemedAt?: GraphQLTypes["DateTimeNullableFilter"]
};
	["IDFilter"]: {
		equals?: string,
	in?: Array<string>,
	notIn?: Array<string>,
	lt?: string,
	lte?: string,
	gt?: string,
	gte?: string,
	not?: GraphQLTypes["IDFilter"]
};
	["StringFilter"]: {
		equals?: string,
	in?: Array<string>,
	notIn?: Array<string>,
	lt?: string,
	lte?: string,
	gt?: string,
	gte?: string,
	contains?: string,
	startsWith?: string,
	endsWith?: string,
	mode?: GraphQLTypes["QueryMode"],
	not?: GraphQLTypes["NestedStringFilter"]
};
	["QueryMode"]: QueryMode;
	["NestedStringFilter"]: {
		equals?: string,
	in?: Array<string>,
	notIn?: Array<string>,
	lt?: string,
	lte?: string,
	gt?: string,
	gte?: string,
	contains?: string,
	startsWith?: string,
	endsWith?: string,
	not?: GraphQLTypes["NestedStringFilter"]
};
	["UserOauthProviderTypeNullableFilter"]: {
		equals?: GraphQLTypes["UserOauthProviderType"],
	in?: Array<GraphQLTypes["UserOauthProviderType"]>,
	notIn?: Array<GraphQLTypes["UserOauthProviderType"]>,
	not?: GraphQLTypes["UserOauthProviderTypeNullableFilter"]
};
	["PostManyRelationFilter"]: {
		every?: GraphQLTypes["PostWhereInput"],
	some?: GraphQLTypes["PostWhereInput"],
	none?: GraphQLTypes["PostWhereInput"]
};
	["ProductManyRelationFilter"]: {
		every?: GraphQLTypes["ProductWhereInput"],
	some?: GraphQLTypes["ProductWhereInput"],
	none?: GraphQLTypes["ProductWhereInput"]
};
	["OrderManyRelationFilter"]: {
		every?: GraphQLTypes["OrderWhereInput"],
	some?: GraphQLTypes["OrderWhereInput"],
	none?: GraphQLTypes["OrderWhereInput"]
};
	["PasswordFilter"]: {
		isSet: boolean
};
	["DateTimeNullableFilter"]: {
		equals?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	notIn?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["DateTimeNullableFilter"]
};
	["UserOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	email?: GraphQLTypes["OrderDirection"],
	oauthProvider?: GraphQLTypes["OrderDirection"],
	oauthProfileId?: GraphQLTypes["OrderDirection"],
	passwordResetIssuedAt?: GraphQLTypes["OrderDirection"],
	passwordResetRedeemedAt?: GraphQLTypes["OrderDirection"]
};
	["OrderDirection"]: OrderDirection;
	["UserUpdateInput"]: {
		name?: string,
	email?: string,
	oauthProvider?: GraphQLTypes["UserOauthProviderType"],
	oauthProfileId?: string,
	password?: string,
	posts?: GraphQLTypes["PostRelateToManyForUpdateInput"],
	products?: GraphQLTypes["ProductRelateToManyForUpdateInput"],
	role?: GraphQLTypes["RoleRelateToOneForUpdateInput"],
	orders?: GraphQLTypes["OrderRelateToManyForUpdateInput"],
	passwordResetToken?: string,
	passwordResetIssuedAt?: GraphQLTypes["DateTime"],
	passwordResetRedeemedAt?: GraphQLTypes["DateTime"]
};
	["PostRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["PostWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["PostWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["PostCreateInput"]>,
	connect?: Array<GraphQLTypes["PostWhereUniqueInput"]>
};
	["ProductRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["ProductWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["ProductWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["ProductCreateInput"]>,
	connect?: Array<GraphQLTypes["ProductWhereUniqueInput"]>
};
	["RoleRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["RoleCreateInput"],
	connect?: GraphQLTypes["RoleWhereUniqueInput"],
	disconnect?: boolean
};
	["OrderRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["OrderWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["OrderWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["OrderCreateInput"]>,
	connect?: Array<GraphQLTypes["OrderWhereUniqueInput"]>
};
	["UserUpdateArgs"]: {
		where: GraphQLTypes["UserWhereUniqueInput"],
	data: GraphQLTypes["UserUpdateInput"]
};
	["UserCreateInput"]: {
		name?: string,
	email?: string,
	oauthProvider?: GraphQLTypes["UserOauthProviderType"],
	oauthProfileId?: string,
	password?: string,
	posts?: GraphQLTypes["PostRelateToManyForCreateInput"],
	products?: GraphQLTypes["ProductRelateToManyForCreateInput"],
	role?: GraphQLTypes["RoleRelateToOneForCreateInput"],
	orders?: GraphQLTypes["OrderRelateToManyForCreateInput"],
	passwordResetToken?: string,
	passwordResetIssuedAt?: GraphQLTypes["DateTime"],
	passwordResetRedeemedAt?: GraphQLTypes["DateTime"]
};
	["PostRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["PostCreateInput"]>,
	connect?: Array<GraphQLTypes["PostWhereUniqueInput"]>
};
	["ProductRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["ProductCreateInput"]>,
	connect?: Array<GraphQLTypes["ProductWhereUniqueInput"]>
};
	["RoleRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["RoleCreateInput"],
	connect?: GraphQLTypes["RoleWhereUniqueInput"]
};
	["OrderRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["OrderCreateInput"]>,
	connect?: Array<GraphQLTypes["OrderWhereUniqueInput"]>
};
	["Post"]: {
	__typename: "Post",
	id: string,
	title?: string,
	status?: string,
	content?: GraphQLTypes["Post_content_Document"],
	publishDate?: GraphQLTypes["DateTime"],
	author?: GraphQLTypes["User"],
	tags?: Array<GraphQLTypes["Tag"]>,
	tagsCount?: number
};
	["Post_content_Document"]: {
	__typename: "Post_content_Document",
	document: GraphQLTypes["JSON"]
};
	["PostWhereUniqueInput"]: {
		id?: string
};
	["PostWhereInput"]: {
		AND?: Array<GraphQLTypes["PostWhereInput"]>,
	OR?: Array<GraphQLTypes["PostWhereInput"]>,
	NOT?: Array<GraphQLTypes["PostWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	title?: GraphQLTypes["StringFilter"],
	status?: GraphQLTypes["StringNullableFilter"],
	publishDate?: GraphQLTypes["DateTimeNullableFilter"],
	author?: GraphQLTypes["UserWhereInput"],
	tags?: GraphQLTypes["TagManyRelationFilter"]
};
	["StringNullableFilter"]: {
		equals?: string,
	in?: Array<string>,
	notIn?: Array<string>,
	lt?: string,
	lte?: string,
	gt?: string,
	gte?: string,
	contains?: string,
	startsWith?: string,
	endsWith?: string,
	mode?: GraphQLTypes["QueryMode"],
	not?: GraphQLTypes["NestedStringNullableFilter"]
};
	["NestedStringNullableFilter"]: {
		equals?: string,
	in?: Array<string>,
	notIn?: Array<string>,
	lt?: string,
	lte?: string,
	gt?: string,
	gte?: string,
	contains?: string,
	startsWith?: string,
	endsWith?: string,
	not?: GraphQLTypes["NestedStringNullableFilter"]
};
	["TagManyRelationFilter"]: {
		every?: GraphQLTypes["TagWhereInput"],
	some?: GraphQLTypes["TagWhereInput"],
	none?: GraphQLTypes["TagWhereInput"]
};
	["PostOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	title?: GraphQLTypes["OrderDirection"],
	status?: GraphQLTypes["OrderDirection"],
	publishDate?: GraphQLTypes["OrderDirection"]
};
	["PostUpdateInput"]: {
		title?: string,
	status?: string,
	content?: GraphQLTypes["JSON"],
	publishDate?: GraphQLTypes["DateTime"],
	author?: GraphQLTypes["UserRelateToOneForUpdateInput"],
	tags?: GraphQLTypes["TagRelateToManyForUpdateInput"]
};
	["UserRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["UserCreateInput"],
	connect?: GraphQLTypes["UserWhereUniqueInput"],
	disconnect?: boolean
};
	["TagRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["TagWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["TagWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["TagCreateInput"]>,
	connect?: Array<GraphQLTypes["TagWhereUniqueInput"]>
};
	["PostUpdateArgs"]: {
		where: GraphQLTypes["PostWhereUniqueInput"],
	data: GraphQLTypes["PostUpdateInput"]
};
	["PostCreateInput"]: {
		title?: string,
	status?: string,
	content?: GraphQLTypes["JSON"],
	publishDate?: GraphQLTypes["DateTime"],
	author?: GraphQLTypes["UserRelateToOneForCreateInput"],
	tags?: GraphQLTypes["TagRelateToManyForCreateInput"]
};
	["UserRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["UserCreateInput"],
	connect?: GraphQLTypes["UserWhereUniqueInput"]
};
	["TagRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["TagCreateInput"]>,
	connect?: Array<GraphQLTypes["TagWhereUniqueInput"]>
};
	["Product"]: {
	__typename: "Product",
	id: string,
	name?: string,
	description?: string,
	handle?: string,
	cloudinaryPhotos?: Array<GraphQLTypes["CloudinaryImage"]>,
	cloudinaryPhotosCount?: number,
	price?: number,
	photos?: Array<GraphQLTypes["Image"]>,
	photosCount?: number,
	status?: string,
	user?: GraphQLTypes["User"],
	skus?: Array<GraphQLTypes["SKU"]>,
	skusCount?: number,
	availableForSale?: boolean,
	skuValues?: Array<GraphQLTypes["SKUValue"]>,
	skuValuesCount?: number,
	options?: Array<GraphQLTypes["Option"]>,
	optionsCount?: number,
	optionValues?: Array<GraphQLTypes["OptionValue"]>,
	optionValuesCount?: number,
	category?: GraphQLTypes["Category"]
};
	["ProductWhereUniqueInput"]: {
		id?: string,
	handle?: string
};
	["ProductWhereInput"]: {
		AND?: Array<GraphQLTypes["ProductWhereInput"]>,
	OR?: Array<GraphQLTypes["ProductWhereInput"]>,
	NOT?: Array<GraphQLTypes["ProductWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	description?: GraphQLTypes["StringFilter"],
	handle?: GraphQLTypes["StringFilter"],
	cloudinaryPhotos?: GraphQLTypes["CloudinaryImageManyRelationFilter"],
	price?: GraphQLTypes["IntNullableFilter"],
	photos?: GraphQLTypes["ImageManyRelationFilter"],
	status?: GraphQLTypes["StringNullableFilter"],
	user?: GraphQLTypes["UserWhereInput"],
	skus?: GraphQLTypes["SKUManyRelationFilter"],
	availableForSale?: GraphQLTypes["BooleanFilter"],
	skuValues?: GraphQLTypes["SKUValueManyRelationFilter"],
	options?: GraphQLTypes["OptionManyRelationFilter"],
	optionValues?: GraphQLTypes["OptionValueManyRelationFilter"],
	category?: GraphQLTypes["CategoryWhereInput"]
};
	["CloudinaryImageManyRelationFilter"]: {
		every?: GraphQLTypes["CloudinaryImageWhereInput"],
	some?: GraphQLTypes["CloudinaryImageWhereInput"],
	none?: GraphQLTypes["CloudinaryImageWhereInput"]
};
	["IntNullableFilter"]: {
		equals?: number,
	in?: Array<number>,
	notIn?: Array<number>,
	lt?: number,
	lte?: number,
	gt?: number,
	gte?: number,
	not?: GraphQLTypes["IntNullableFilter"]
};
	["ImageManyRelationFilter"]: {
		every?: GraphQLTypes["ImageWhereInput"],
	some?: GraphQLTypes["ImageWhereInput"],
	none?: GraphQLTypes["ImageWhereInput"]
};
	["SKUManyRelationFilter"]: {
		every?: GraphQLTypes["SKUWhereInput"],
	some?: GraphQLTypes["SKUWhereInput"],
	none?: GraphQLTypes["SKUWhereInput"]
};
	["BooleanFilter"]: {
		equals?: boolean,
	not?: GraphQLTypes["BooleanFilter"]
};
	["SKUValueManyRelationFilter"]: {
		every?: GraphQLTypes["SKUValueWhereInput"],
	some?: GraphQLTypes["SKUValueWhereInput"],
	none?: GraphQLTypes["SKUValueWhereInput"]
};
	["OptionManyRelationFilter"]: {
		every?: GraphQLTypes["OptionWhereInput"],
	some?: GraphQLTypes["OptionWhereInput"],
	none?: GraphQLTypes["OptionWhereInput"]
};
	["OptionValueManyRelationFilter"]: {
		every?: GraphQLTypes["OptionValueWhereInput"],
	some?: GraphQLTypes["OptionValueWhereInput"],
	none?: GraphQLTypes["OptionValueWhereInput"]
};
	["ProductOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	description?: GraphQLTypes["OrderDirection"],
	handle?: GraphQLTypes["OrderDirection"],
	price?: GraphQLTypes["OrderDirection"],
	status?: GraphQLTypes["OrderDirection"],
	availableForSale?: GraphQLTypes["OrderDirection"]
};
	["ProductUpdateInput"]: {
		name?: string,
	description?: string,
	handle?: string,
	cloudinaryPhotos?: GraphQLTypes["CloudinaryImageRelateToManyForUpdateInput"],
	price?: number,
	photos?: GraphQLTypes["ImageRelateToManyForUpdateInput"],
	status?: string,
	user?: GraphQLTypes["UserRelateToOneForUpdateInput"],
	skus?: GraphQLTypes["SKURelateToManyForUpdateInput"],
	availableForSale?: boolean,
	skuValues?: GraphQLTypes["SKUValueRelateToManyForUpdateInput"],
	options?: GraphQLTypes["OptionRelateToManyForUpdateInput"],
	optionValues?: GraphQLTypes["OptionValueRelateToManyForUpdateInput"],
	category?: GraphQLTypes["CategoryRelateToOneForUpdateInput"]
};
	["CloudinaryImageRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["CloudinaryImageWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["CloudinaryImageWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["CloudinaryImageCreateInput"]>,
	connect?: Array<GraphQLTypes["CloudinaryImageWhereUniqueInput"]>
};
	["ImageRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["ImageWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["ImageWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["ImageCreateInput"]>,
	connect?: Array<GraphQLTypes["ImageWhereUniqueInput"]>
};
	["SKURelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["SKUWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["SKUWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["SKUCreateInput"]>,
	connect?: Array<GraphQLTypes["SKUWhereUniqueInput"]>
};
	["SKUValueRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["SKUValueWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["SKUValueWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["SKUValueCreateInput"]>,
	connect?: Array<GraphQLTypes["SKUValueWhereUniqueInput"]>
};
	["OptionRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["OptionWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["OptionWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["OptionCreateInput"]>,
	connect?: Array<GraphQLTypes["OptionWhereUniqueInput"]>
};
	["OptionValueRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["OptionValueWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["OptionValueWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["OptionValueCreateInput"]>,
	connect?: Array<GraphQLTypes["OptionValueWhereUniqueInput"]>
};
	["CategoryRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["CategoryCreateInput"],
	connect?: GraphQLTypes["CategoryWhereUniqueInput"],
	disconnect?: boolean
};
	["ProductUpdateArgs"]: {
		where: GraphQLTypes["ProductWhereUniqueInput"],
	data: GraphQLTypes["ProductUpdateInput"]
};
	["ProductCreateInput"]: {
		name?: string,
	description?: string,
	handle?: string,
	cloudinaryPhotos?: GraphQLTypes["CloudinaryImageRelateToManyForCreateInput"],
	price?: number,
	photos?: GraphQLTypes["ImageRelateToManyForCreateInput"],
	status?: string,
	user?: GraphQLTypes["UserRelateToOneForCreateInput"],
	skus?: GraphQLTypes["SKURelateToManyForCreateInput"],
	availableForSale?: boolean,
	skuValues?: GraphQLTypes["SKUValueRelateToManyForCreateInput"],
	options?: GraphQLTypes["OptionRelateToManyForCreateInput"],
	optionValues?: GraphQLTypes["OptionValueRelateToManyForCreateInput"],
	category?: GraphQLTypes["CategoryRelateToOneForCreateInput"]
};
	["CloudinaryImageRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["CloudinaryImageCreateInput"]>,
	connect?: Array<GraphQLTypes["CloudinaryImageWhereUniqueInput"]>
};
	["ImageRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["ImageCreateInput"]>,
	connect?: Array<GraphQLTypes["ImageWhereUniqueInput"]>
};
	["SKURelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["SKUCreateInput"]>,
	connect?: Array<GraphQLTypes["SKUWhereUniqueInput"]>
};
	["SKUValueRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["SKUValueCreateInput"]>,
	connect?: Array<GraphQLTypes["SKUValueWhereUniqueInput"]>
};
	["OptionRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["OptionCreateInput"]>,
	connect?: Array<GraphQLTypes["OptionWhereUniqueInput"]>
};
	["OptionValueRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["OptionValueCreateInput"]>,
	connect?: Array<GraphQLTypes["OptionValueWhereUniqueInput"]>
};
	["CategoryRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["CategoryCreateInput"],
	connect?: GraphQLTypes["CategoryWhereUniqueInput"]
};
	["CloudinaryImage"]: {
	__typename: "CloudinaryImage",
	id: string,
	image?: GraphQLTypes["CloudinaryImage_File"],
	altText?: string,
	product?: GraphQLTypes["Product"],
	option?: GraphQLTypes["Option"],
	optionValue?: GraphQLTypes["OptionValue"]
};
	["CloudinaryImage_File"]: {
	__typename: "CloudinaryImage_File",
	id?: string,
	filename?: string,
	originalFilename?: string,
	mimetype?: string,
	encoding?: string,
	publicUrl?: string,
	publicUrlTransformed?: string
};
	/** Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
All options are strings as they ultimately end up in a URL. */
["CloudinaryImageFormat"]: {
		/**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
	prettyName?: string,
	width?: string,
	height?: string,
	crop?: string,
	aspect_ratio?: string,
	gravity?: string,
	zoom?: string,
	x?: string,
	y?: string,
	format?: string,
	fetch_format?: string,
	quality?: string,
	radius?: string,
	angle?: string,
	effect?: string,
	opacity?: string,
	border?: string,
	background?: string,
	overlay?: string,
	underlay?: string,
	default_image?: string,
	delay?: string,
	color?: string,
	color_space?: string,
	dpr?: string,
	page?: string,
	density?: string,
	flags?: string,
	transformation?: string
};
	["CloudinaryImageWhereUniqueInput"]: {
		id?: string
};
	["CloudinaryImageWhereInput"]: {
		AND?: Array<GraphQLTypes["CloudinaryImageWhereInput"]>,
	OR?: Array<GraphQLTypes["CloudinaryImageWhereInput"]>,
	NOT?: Array<GraphQLTypes["CloudinaryImageWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	altText?: GraphQLTypes["StringFilter"],
	product?: GraphQLTypes["ProductWhereInput"],
	option?: GraphQLTypes["OptionWhereInput"],
	optionValue?: GraphQLTypes["OptionValueWhereInput"]
};
	["CloudinaryImageOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	altText?: GraphQLTypes["OrderDirection"]
};
	["CloudinaryImageUpdateInput"]: {
		image?: GraphQLTypes["Upload"],
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"],
	option?: GraphQLTypes["OptionRelateToOneForUpdateInput"],
	optionValue?: GraphQLTypes["OptionValueRelateToOneForUpdateInput"]
};
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:any;
	["ProductRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["ProductCreateInput"],
	connect?: GraphQLTypes["ProductWhereUniqueInput"],
	disconnect?: boolean
};
	["OptionRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["OptionCreateInput"],
	connect?: GraphQLTypes["OptionWhereUniqueInput"],
	disconnect?: boolean
};
	["OptionValueRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["OptionValueCreateInput"],
	connect?: GraphQLTypes["OptionValueWhereUniqueInput"],
	disconnect?: boolean
};
	["CloudinaryImageUpdateArgs"]: {
		where: GraphQLTypes["CloudinaryImageWhereUniqueInput"],
	data: GraphQLTypes["CloudinaryImageUpdateInput"]
};
	["CloudinaryImageCreateInput"]: {
		image?: GraphQLTypes["Upload"],
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"],
	option?: GraphQLTypes["OptionRelateToOneForCreateInput"],
	optionValue?: GraphQLTypes["OptionValueRelateToOneForCreateInput"]
};
	["ProductRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["ProductCreateInput"],
	connect?: GraphQLTypes["ProductWhereUniqueInput"]
};
	["OptionRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["OptionCreateInput"],
	connect?: GraphQLTypes["OptionWhereUniqueInput"]
};
	["OptionValueRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["OptionValueCreateInput"],
	connect?: GraphQLTypes["OptionValueWhereUniqueInput"]
};
	["Image"]: {
	__typename: "Image",
	id: string,
	src?: string,
	altText?: string,
	product?: GraphQLTypes["Product"],
	option?: GraphQLTypes["Option"],
	optionValue?: GraphQLTypes["OptionValue"]
};
	["ImageWhereUniqueInput"]: {
		id?: string
};
	["ImageWhereInput"]: {
		AND?: Array<GraphQLTypes["ImageWhereInput"]>,
	OR?: Array<GraphQLTypes["ImageWhereInput"]>,
	NOT?: Array<GraphQLTypes["ImageWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	src?: GraphQLTypes["StringFilter"],
	altText?: GraphQLTypes["StringFilter"],
	product?: GraphQLTypes["ProductWhereInput"],
	option?: GraphQLTypes["OptionWhereInput"],
	optionValue?: GraphQLTypes["OptionValueWhereInput"]
};
	["ImageOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	src?: GraphQLTypes["OrderDirection"],
	altText?: GraphQLTypes["OrderDirection"]
};
	["ImageUpdateInput"]: {
		src?: string,
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"],
	option?: GraphQLTypes["OptionRelateToOneForUpdateInput"],
	optionValue?: GraphQLTypes["OptionValueRelateToOneForUpdateInput"]
};
	["ImageUpdateArgs"]: {
		where: GraphQLTypes["ImageWhereUniqueInput"],
	data: GraphQLTypes["ImageUpdateInput"]
};
	["ImageCreateInput"]: {
		src?: string,
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"],
	option?: GraphQLTypes["OptionRelateToOneForCreateInput"],
	optionValue?: GraphQLTypes["OptionValueRelateToOneForCreateInput"]
};
	["Tag"]: {
	__typename: "Tag",
	id: string,
	name?: string,
	posts?: Array<GraphQLTypes["Post"]>,
	postsCount?: number
};
	["TagWhereUniqueInput"]: {
		id?: string
};
	["TagWhereInput"]: {
		AND?: Array<GraphQLTypes["TagWhereInput"]>,
	OR?: Array<GraphQLTypes["TagWhereInput"]>,
	NOT?: Array<GraphQLTypes["TagWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	posts?: GraphQLTypes["PostManyRelationFilter"]
};
	["TagOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"]
};
	["TagUpdateInput"]: {
		name?: string,
	posts?: GraphQLTypes["PostRelateToManyForUpdateInput"]
};
	["TagUpdateArgs"]: {
		where: GraphQLTypes["TagWhereUniqueInput"],
	data: GraphQLTypes["TagUpdateInput"]
};
	["TagCreateInput"]: {
		name?: string,
	posts?: GraphQLTypes["PostRelateToManyForCreateInput"]
};
	["Category"]: {
	__typename: "Category",
	id: string,
	name?: string
};
	["CategoryWhereUniqueInput"]: {
		id?: string
};
	["CategoryWhereInput"]: {
		AND?: Array<GraphQLTypes["CategoryWhereInput"]>,
	OR?: Array<GraphQLTypes["CategoryWhereInput"]>,
	NOT?: Array<GraphQLTypes["CategoryWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"]
};
	["CategoryOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"]
};
	["CategoryUpdateInput"]: {
		name?: string
};
	["CategoryUpdateArgs"]: {
		where: GraphQLTypes["CategoryWhereUniqueInput"],
	data: GraphQLTypes["CategoryUpdateInput"]
};
	["CategoryCreateInput"]: {
		name?: string
};
	["Role"]: {
	__typename: "Role",
	id: string,
	name?: string,
	canManageProducts?: boolean,
	canSeeOtherUsers?: boolean,
	canManageUsers?: boolean,
	canManageRoles?: boolean,
	canManageCart?: boolean,
	canManageOrders?: boolean,
	assignedTo?: Array<GraphQLTypes["User"]>,
	assignedToCount?: number
};
	["RoleWhereUniqueInput"]: {
		id?: string
};
	["RoleWhereInput"]: {
		AND?: Array<GraphQLTypes["RoleWhereInput"]>,
	OR?: Array<GraphQLTypes["RoleWhereInput"]>,
	NOT?: Array<GraphQLTypes["RoleWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	canManageProducts?: GraphQLTypes["BooleanFilter"],
	canSeeOtherUsers?: GraphQLTypes["BooleanFilter"],
	canManageUsers?: GraphQLTypes["BooleanFilter"],
	canManageRoles?: GraphQLTypes["BooleanFilter"],
	canManageCart?: GraphQLTypes["BooleanFilter"],
	canManageOrders?: GraphQLTypes["BooleanFilter"],
	assignedTo?: GraphQLTypes["UserManyRelationFilter"]
};
	["UserManyRelationFilter"]: {
		every?: GraphQLTypes["UserWhereInput"],
	some?: GraphQLTypes["UserWhereInput"],
	none?: GraphQLTypes["UserWhereInput"]
};
	["RoleOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	canManageProducts?: GraphQLTypes["OrderDirection"],
	canSeeOtherUsers?: GraphQLTypes["OrderDirection"],
	canManageUsers?: GraphQLTypes["OrderDirection"],
	canManageRoles?: GraphQLTypes["OrderDirection"],
	canManageCart?: GraphQLTypes["OrderDirection"],
	canManageOrders?: GraphQLTypes["OrderDirection"]
};
	["RoleUpdateInput"]: {
		name?: string,
	canManageProducts?: boolean,
	canSeeOtherUsers?: boolean,
	canManageUsers?: boolean,
	canManageRoles?: boolean,
	canManageCart?: boolean,
	canManageOrders?: boolean,
	assignedTo?: GraphQLTypes["UserRelateToManyForUpdateInput"]
};
	["UserRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["UserWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["UserWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["UserCreateInput"]>,
	connect?: Array<GraphQLTypes["UserWhereUniqueInput"]>
};
	["RoleUpdateArgs"]: {
		where: GraphQLTypes["RoleWhereUniqueInput"],
	data: GraphQLTypes["RoleUpdateInput"]
};
	["RoleCreateInput"]: {
		name?: string,
	canManageProducts?: boolean,
	canSeeOtherUsers?: boolean,
	canManageUsers?: boolean,
	canManageRoles?: boolean,
	canManageCart?: boolean,
	canManageOrders?: boolean,
	assignedTo?: GraphQLTypes["UserRelateToManyForCreateInput"]
};
	["UserRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["UserCreateInput"]>,
	connect?: Array<GraphQLTypes["UserWhereUniqueInput"]>
};
	["SKU"]: {
	__typename: "SKU",
	id: string,
	sku?: string,
	product?: GraphQLTypes["Product"],
	stock?: number
};
	["SKUWhereUniqueInput"]: {
		id?: string,
	sku?: string
};
	["SKUWhereInput"]: {
		AND?: Array<GraphQLTypes["SKUWhereInput"]>,
	OR?: Array<GraphQLTypes["SKUWhereInput"]>,
	NOT?: Array<GraphQLTypes["SKUWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	sku?: GraphQLTypes["StringFilter"],
	product?: GraphQLTypes["ProductWhereInput"],
	stock?: GraphQLTypes["IntNullableFilter"]
};
	["SKUOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	sku?: GraphQLTypes["OrderDirection"],
	stock?: GraphQLTypes["OrderDirection"]
};
	["SKUUpdateInput"]: {
		sku?: string,
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"],
	stock?: number
};
	["SKUUpdateArgs"]: {
		where: GraphQLTypes["SKUWhereUniqueInput"],
	data: GraphQLTypes["SKUUpdateInput"]
};
	["SKUCreateInput"]: {
		sku?: string,
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"],
	stock?: number
};
	["SKUValue"]: {
	__typename: "SKUValue",
	id: string,
	product?: GraphQLTypes["Product"],
	SKU?: GraphQLTypes["SKU"],
	options?: Array<GraphQLTypes["Option"]>,
	optionsCount?: number,
	optionValues?: Array<GraphQLTypes["OptionValue"]>,
	optionValuesCount?: number
};
	["SKUValueWhereUniqueInput"]: {
		id?: string
};
	["SKUValueWhereInput"]: {
		AND?: Array<GraphQLTypes["SKUValueWhereInput"]>,
	OR?: Array<GraphQLTypes["SKUValueWhereInput"]>,
	NOT?: Array<GraphQLTypes["SKUValueWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	product?: GraphQLTypes["ProductWhereInput"],
	SKU?: GraphQLTypes["SKUWhereInput"],
	options?: GraphQLTypes["OptionManyRelationFilter"],
	optionValues?: GraphQLTypes["OptionValueManyRelationFilter"]
};
	["SKUValueOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"]
};
	["SKUValueUpdateInput"]: {
		product?: GraphQLTypes["ProductRelateToOneForUpdateInput"],
	SKU?: GraphQLTypes["SKURelateToOneForUpdateInput"],
	options?: GraphQLTypes["OptionRelateToManyForUpdateInput"],
	optionValues?: GraphQLTypes["OptionValueRelateToManyForUpdateInput"]
};
	["SKURelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["SKUCreateInput"],
	connect?: GraphQLTypes["SKUWhereUniqueInput"],
	disconnect?: boolean
};
	["SKUValueUpdateArgs"]: {
		where: GraphQLTypes["SKUValueWhereUniqueInput"],
	data: GraphQLTypes["SKUValueUpdateInput"]
};
	["SKUValueCreateInput"]: {
		product?: GraphQLTypes["ProductRelateToOneForCreateInput"],
	SKU?: GraphQLTypes["SKURelateToOneForCreateInput"],
	options?: GraphQLTypes["OptionRelateToManyForCreateInput"],
	optionValues?: GraphQLTypes["OptionValueRelateToManyForCreateInput"]
};
	["SKURelateToOneForCreateInput"]: {
		create?: GraphQLTypes["SKUCreateInput"],
	connect?: GraphQLTypes["SKUWhereUniqueInput"]
};
	["Option"]: {
	__typename: "Option",
	id: string,
	name?: string,
	values?: Array<GraphQLTypes["OptionValue"]>,
	valuesCount?: number,
	product?: GraphQLTypes["Product"]
};
	["OptionWhereUniqueInput"]: {
		id?: string,
	name?: string
};
	["OptionWhereInput"]: {
		AND?: Array<GraphQLTypes["OptionWhereInput"]>,
	OR?: Array<GraphQLTypes["OptionWhereInput"]>,
	NOT?: Array<GraphQLTypes["OptionWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	values?: GraphQLTypes["OptionValueManyRelationFilter"],
	product?: GraphQLTypes["ProductWhereInput"]
};
	["OptionOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"]
};
	["OptionUpdateInput"]: {
		name?: string,
	values?: GraphQLTypes["OptionValueRelateToManyForUpdateInput"],
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"]
};
	["OptionUpdateArgs"]: {
		where: GraphQLTypes["OptionWhereUniqueInput"],
	data: GraphQLTypes["OptionUpdateInput"]
};
	["OptionCreateInput"]: {
		name?: string,
	values?: GraphQLTypes["OptionValueRelateToManyForCreateInput"],
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"]
};
	["OptionValue"]: {
	__typename: "OptionValue",
	id: string,
	name?: string,
	product?: GraphQLTypes["Product"],
	option?: GraphQLTypes["Option"]
};
	["OptionValueWhereUniqueInput"]: {
		id?: string,
	name?: string
};
	["OptionValueWhereInput"]: {
		AND?: Array<GraphQLTypes["OptionValueWhereInput"]>,
	OR?: Array<GraphQLTypes["OptionValueWhereInput"]>,
	NOT?: Array<GraphQLTypes["OptionValueWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	product?: GraphQLTypes["ProductWhereInput"],
	option?: GraphQLTypes["OptionWhereInput"]
};
	["OptionValueOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"]
};
	["OptionValueUpdateInput"]: {
		name?: string,
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"],
	option?: GraphQLTypes["OptionRelateToOneForUpdateInput"]
};
	["OptionValueUpdateArgs"]: {
		where: GraphQLTypes["OptionValueWhereUniqueInput"],
	data: GraphQLTypes["OptionValueUpdateInput"]
};
	["OptionValueCreateInput"]: {
		name?: string,
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"],
	option?: GraphQLTypes["OptionRelateToOneForCreateInput"]
};
	["Order"]: {
	__typename: "Order",
	id: string,
	label?: string,
	total?: number,
	items?: Array<GraphQLTypes["OrderItem"]>,
	itemsCount?: number,
	user?: GraphQLTypes["User"],
	charge?: string
};
	["OrderWhereUniqueInput"]: {
		id?: string
};
	["OrderWhereInput"]: {
		AND?: Array<GraphQLTypes["OrderWhereInput"]>,
	OR?: Array<GraphQLTypes["OrderWhereInput"]>,
	NOT?: Array<GraphQLTypes["OrderWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	total?: GraphQLTypes["IntNullableFilter"],
	items?: GraphQLTypes["OrderItemManyRelationFilter"],
	user?: GraphQLTypes["UserWhereInput"],
	charge?: GraphQLTypes["StringFilter"]
};
	["OrderItemManyRelationFilter"]: {
		every?: GraphQLTypes["OrderItemWhereInput"],
	some?: GraphQLTypes["OrderItemWhereInput"],
	none?: GraphQLTypes["OrderItemWhereInput"]
};
	["OrderOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	total?: GraphQLTypes["OrderDirection"],
	charge?: GraphQLTypes["OrderDirection"]
};
	["OrderUpdateInput"]: {
		total?: number,
	items?: GraphQLTypes["OrderItemRelateToManyForUpdateInput"],
	user?: GraphQLTypes["UserRelateToOneForUpdateInput"],
	charge?: string
};
	["OrderItemRelateToManyForUpdateInput"]: {
		disconnect?: Array<GraphQLTypes["OrderItemWhereUniqueInput"]>,
	set?: Array<GraphQLTypes["OrderItemWhereUniqueInput"]>,
	create?: Array<GraphQLTypes["OrderItemCreateInput"]>,
	connect?: Array<GraphQLTypes["OrderItemWhereUniqueInput"]>
};
	["OrderUpdateArgs"]: {
		where: GraphQLTypes["OrderWhereUniqueInput"],
	data: GraphQLTypes["OrderUpdateInput"]
};
	["OrderCreateInput"]: {
		total?: number,
	items?: GraphQLTypes["OrderItemRelateToManyForCreateInput"],
	user?: GraphQLTypes["UserRelateToOneForCreateInput"],
	charge?: string
};
	["OrderItemRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["OrderItemCreateInput"]>,
	connect?: Array<GraphQLTypes["OrderItemWhereUniqueInput"]>
};
	["OrderItem"]: {
	__typename: "OrderItem",
	id: string,
	name?: string,
	description?: string,
	cloudinaryImage?: GraphQLTypes["CloudinaryImage"],
	image?: GraphQLTypes["Image"],
	price?: number,
	quantity?: number,
	order?: GraphQLTypes["Order"]
};
	["OrderItemWhereUniqueInput"]: {
		id?: string
};
	["OrderItemWhereInput"]: {
		AND?: Array<GraphQLTypes["OrderItemWhereInput"]>,
	OR?: Array<GraphQLTypes["OrderItemWhereInput"]>,
	NOT?: Array<GraphQLTypes["OrderItemWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	description?: GraphQLTypes["StringFilter"],
	cloudinaryImage?: GraphQLTypes["CloudinaryImageWhereInput"],
	image?: GraphQLTypes["ImageWhereInput"],
	price?: GraphQLTypes["IntNullableFilter"],
	quantity?: GraphQLTypes["IntNullableFilter"],
	order?: GraphQLTypes["OrderWhereInput"]
};
	["OrderItemOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	description?: GraphQLTypes["OrderDirection"],
	price?: GraphQLTypes["OrderDirection"],
	quantity?: GraphQLTypes["OrderDirection"]
};
	["OrderItemUpdateInput"]: {
		name?: string,
	description?: string,
	cloudinaryImage?: GraphQLTypes["CloudinaryImageRelateToOneForUpdateInput"],
	image?: GraphQLTypes["ImageRelateToOneForUpdateInput"],
	price?: number,
	quantity?: number,
	order?: GraphQLTypes["OrderRelateToOneForUpdateInput"]
};
	["CloudinaryImageRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["CloudinaryImageCreateInput"],
	connect?: GraphQLTypes["CloudinaryImageWhereUniqueInput"],
	disconnect?: boolean
};
	["ImageRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["ImageCreateInput"],
	connect?: GraphQLTypes["ImageWhereUniqueInput"],
	disconnect?: boolean
};
	["OrderRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["OrderCreateInput"],
	connect?: GraphQLTypes["OrderWhereUniqueInput"],
	disconnect?: boolean
};
	["OrderItemUpdateArgs"]: {
		where: GraphQLTypes["OrderItemWhereUniqueInput"],
	data: GraphQLTypes["OrderItemUpdateInput"]
};
	["OrderItemCreateInput"]: {
		name?: string,
	description?: string,
	cloudinaryImage?: GraphQLTypes["CloudinaryImageRelateToOneForCreateInput"],
	image?: GraphQLTypes["ImageRelateToOneForCreateInput"],
	price?: number,
	quantity?: number,
	order?: GraphQLTypes["OrderRelateToOneForCreateInput"]
};
	["CloudinaryImageRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["CloudinaryImageCreateInput"],
	connect?: GraphQLTypes["CloudinaryImageWhereUniqueInput"]
};
	["ImageRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["ImageCreateInput"],
	connect?: GraphQLTypes["ImageWhereUniqueInput"]
};
	["OrderRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["OrderCreateInput"],
	connect?: GraphQLTypes["OrderWhereUniqueInput"]
};
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:any;
	["Mutation"]: {
	__typename: "Mutation",
	createUser?: GraphQLTypes["User"],
	createUsers?: Array<GraphQLTypes["User"] | undefined>,
	updateUser?: GraphQLTypes["User"],
	updateUsers?: Array<GraphQLTypes["User"] | undefined>,
	deleteUser?: GraphQLTypes["User"],
	deleteUsers?: Array<GraphQLTypes["User"] | undefined>,
	createPost?: GraphQLTypes["Post"],
	createPosts?: Array<GraphQLTypes["Post"] | undefined>,
	updatePost?: GraphQLTypes["Post"],
	updatePosts?: Array<GraphQLTypes["Post"] | undefined>,
	deletePost?: GraphQLTypes["Post"],
	deletePosts?: Array<GraphQLTypes["Post"] | undefined>,
	createProduct?: GraphQLTypes["Product"],
	createProducts?: Array<GraphQLTypes["Product"] | undefined>,
	updateProduct?: GraphQLTypes["Product"],
	updateProducts?: Array<GraphQLTypes["Product"] | undefined>,
	deleteProduct?: GraphQLTypes["Product"],
	deleteProducts?: Array<GraphQLTypes["Product"] | undefined>,
	createCloudinaryImage?: GraphQLTypes["CloudinaryImage"],
	createCloudinaryImages?: Array<GraphQLTypes["CloudinaryImage"] | undefined>,
	updateCloudinaryImage?: GraphQLTypes["CloudinaryImage"],
	updateCloudinaryImages?: Array<GraphQLTypes["CloudinaryImage"] | undefined>,
	deleteCloudinaryImage?: GraphQLTypes["CloudinaryImage"],
	deleteCloudinaryImages?: Array<GraphQLTypes["CloudinaryImage"] | undefined>,
	createImage?: GraphQLTypes["Image"],
	createImages?: Array<GraphQLTypes["Image"] | undefined>,
	updateImage?: GraphQLTypes["Image"],
	updateImages?: Array<GraphQLTypes["Image"] | undefined>,
	deleteImage?: GraphQLTypes["Image"],
	deleteImages?: Array<GraphQLTypes["Image"] | undefined>,
	createTag?: GraphQLTypes["Tag"],
	createTags?: Array<GraphQLTypes["Tag"] | undefined>,
	updateTag?: GraphQLTypes["Tag"],
	updateTags?: Array<GraphQLTypes["Tag"] | undefined>,
	deleteTag?: GraphQLTypes["Tag"],
	deleteTags?: Array<GraphQLTypes["Tag"] | undefined>,
	createCategory?: GraphQLTypes["Category"],
	createCategories?: Array<GraphQLTypes["Category"] | undefined>,
	updateCategory?: GraphQLTypes["Category"],
	updateCategories?: Array<GraphQLTypes["Category"] | undefined>,
	deleteCategory?: GraphQLTypes["Category"],
	deleteCategories?: Array<GraphQLTypes["Category"] | undefined>,
	createRole?: GraphQLTypes["Role"],
	createRoles?: Array<GraphQLTypes["Role"] | undefined>,
	updateRole?: GraphQLTypes["Role"],
	updateRoles?: Array<GraphQLTypes["Role"] | undefined>,
	deleteRole?: GraphQLTypes["Role"],
	deleteRoles?: Array<GraphQLTypes["Role"] | undefined>,
	createSKU?: GraphQLTypes["SKU"],
	createSKUS?: Array<GraphQLTypes["SKU"] | undefined>,
	updateSKU?: GraphQLTypes["SKU"],
	updateSKUS?: Array<GraphQLTypes["SKU"] | undefined>,
	deleteSKU?: GraphQLTypes["SKU"],
	deleteSKUS?: Array<GraphQLTypes["SKU"] | undefined>,
	createSKUValue?: GraphQLTypes["SKUValue"],
	createSKUValues?: Array<GraphQLTypes["SKUValue"] | undefined>,
	updateSKUValue?: GraphQLTypes["SKUValue"],
	updateSKUValues?: Array<GraphQLTypes["SKUValue"] | undefined>,
	deleteSKUValue?: GraphQLTypes["SKUValue"],
	deleteSKUValues?: Array<GraphQLTypes["SKUValue"] | undefined>,
	createOption?: GraphQLTypes["Option"],
	createOptions?: Array<GraphQLTypes["Option"] | undefined>,
	updateOption?: GraphQLTypes["Option"],
	updateOptions?: Array<GraphQLTypes["Option"] | undefined>,
	deleteOption?: GraphQLTypes["Option"],
	deleteOptions?: Array<GraphQLTypes["Option"] | undefined>,
	createOptionValue?: GraphQLTypes["OptionValue"],
	createOptionValues?: Array<GraphQLTypes["OptionValue"] | undefined>,
	updateOptionValue?: GraphQLTypes["OptionValue"],
	updateOptionValues?: Array<GraphQLTypes["OptionValue"] | undefined>,
	deleteOptionValue?: GraphQLTypes["OptionValue"],
	deleteOptionValues?: Array<GraphQLTypes["OptionValue"] | undefined>,
	createOrder?: GraphQLTypes["Order"],
	createOrders?: Array<GraphQLTypes["Order"] | undefined>,
	updateOrder?: GraphQLTypes["Order"],
	updateOrders?: Array<GraphQLTypes["Order"] | undefined>,
	deleteOrder?: GraphQLTypes["Order"],
	deleteOrders?: Array<GraphQLTypes["Order"] | undefined>,
	createOrderItem?: GraphQLTypes["OrderItem"],
	createOrderItems?: Array<GraphQLTypes["OrderItem"] | undefined>,
	updateOrderItem?: GraphQLTypes["OrderItem"],
	updateOrderItems?: Array<GraphQLTypes["OrderItem"] | undefined>,
	deleteOrderItem?: GraphQLTypes["OrderItem"],
	deleteOrderItems?: Array<GraphQLTypes["OrderItem"] | undefined>,
	endSession: boolean,
	authenticateUserWithPassword?: GraphQLTypes["UserAuthenticationWithPasswordResult"],
	createInitialUser: GraphQLTypes["UserAuthenticationWithPasswordSuccess"],
	sendUserPasswordResetLink: boolean,
	redeemUserPasswordResetToken?: GraphQLTypes["RedeemUserPasswordResetTokenResult"]
};
	["UserAuthenticationWithPasswordResult"]:{
	__typename:"UserAuthenticationWithPasswordSuccess" | "UserAuthenticationWithPasswordFailure"
	['...on UserAuthenticationWithPasswordSuccess']: '__union' & GraphQLTypes["UserAuthenticationWithPasswordSuccess"];
	['...on UserAuthenticationWithPasswordFailure']: '__union' & GraphQLTypes["UserAuthenticationWithPasswordFailure"];
};
	["UserAuthenticationWithPasswordSuccess"]: {
	__typename: "UserAuthenticationWithPasswordSuccess",
	sessionToken: string,
	item: GraphQLTypes["User"]
};
	["UserAuthenticationWithPasswordFailure"]: {
	__typename: "UserAuthenticationWithPasswordFailure",
	message: string
};
	["CreateInitialUserInput"]: {
		name?: string,
	email?: string,
	password?: string
};
	["RedeemUserPasswordResetTokenResult"]: {
	__typename: "RedeemUserPasswordResetTokenResult",
	code: GraphQLTypes["PasswordResetRedemptionErrorCode"],
	message: string
};
	["PasswordResetRedemptionErrorCode"]: PasswordResetRedemptionErrorCode;
	["Query"]: {
	__typename: "Query",
	users?: Array<GraphQLTypes["User"]>,
	user?: GraphQLTypes["User"],
	usersCount?: number,
	posts?: Array<GraphQLTypes["Post"]>,
	post?: GraphQLTypes["Post"],
	postsCount?: number,
	products?: Array<GraphQLTypes["Product"]>,
	product?: GraphQLTypes["Product"],
	productsCount?: number,
	cloudinaryImages?: Array<GraphQLTypes["CloudinaryImage"]>,
	cloudinaryImage?: GraphQLTypes["CloudinaryImage"],
	cloudinaryImagesCount?: number,
	images?: Array<GraphQLTypes["Image"]>,
	image?: GraphQLTypes["Image"],
	imagesCount?: number,
	tags?: Array<GraphQLTypes["Tag"]>,
	tag?: GraphQLTypes["Tag"],
	tagsCount?: number,
	categories?: Array<GraphQLTypes["Category"]>,
	category?: GraphQLTypes["Category"],
	categoriesCount?: number,
	roles?: Array<GraphQLTypes["Role"]>,
	role?: GraphQLTypes["Role"],
	rolesCount?: number,
	sKUS?: Array<GraphQLTypes["SKU"]>,
	sKU?: GraphQLTypes["SKU"],
	sKUSCount?: number,
	sKUValues?: Array<GraphQLTypes["SKUValue"]>,
	sKUValue?: GraphQLTypes["SKUValue"],
	sKUValuesCount?: number,
	options?: Array<GraphQLTypes["Option"]>,
	option?: GraphQLTypes["Option"],
	optionsCount?: number,
	optionValues?: Array<GraphQLTypes["OptionValue"]>,
	optionValue?: GraphQLTypes["OptionValue"],
	optionValuesCount?: number,
	orders?: Array<GraphQLTypes["Order"]>,
	order?: GraphQLTypes["Order"],
	ordersCount?: number,
	orderItems?: Array<GraphQLTypes["OrderItem"]>,
	orderItem?: GraphQLTypes["OrderItem"],
	orderItemsCount?: number,
	keystone: GraphQLTypes["KeystoneMeta"],
	authenticatedItem?: GraphQLTypes["AuthenticatedItem"],
	validateUserPasswordResetToken?: GraphQLTypes["ValidateUserPasswordResetTokenResult"]
};
	["AuthenticatedItem"]:{
	__typename:"User"
	['...on User']: '__union' & GraphQLTypes["User"];
};
	["ValidateUserPasswordResetTokenResult"]: {
	__typename: "ValidateUserPasswordResetTokenResult",
	code: GraphQLTypes["PasswordResetRedemptionErrorCode"],
	message: string
};
	["KeystoneMeta"]: {
	__typename: "KeystoneMeta",
	adminMeta: GraphQLTypes["KeystoneAdminMeta"]
};
	["KeystoneAdminMeta"]: {
	__typename: "KeystoneAdminMeta",
	enableSignout: boolean,
	enableSessionItem: boolean,
	lists: Array<GraphQLTypes["KeystoneAdminUIListMeta"]>,
	list?: GraphQLTypes["KeystoneAdminUIListMeta"]
};
	["KeystoneAdminUIListMeta"]: {
	__typename: "KeystoneAdminUIListMeta",
	key: string,
	itemQueryName: string,
	listQueryName: string,
	hideCreate: boolean,
	hideDelete: boolean,
	path: string,
	label: string,
	singular: string,
	plural: string,
	description?: string,
	initialColumns: Array<string>,
	pageSize: number,
	labelField: string,
	fields: Array<GraphQLTypes["KeystoneAdminUIFieldMeta"]>,
	initialSort?: GraphQLTypes["KeystoneAdminUISort"],
	isHidden: boolean
};
	["KeystoneAdminUIFieldMeta"]: {
	__typename: "KeystoneAdminUIFieldMeta",
	path: string,
	label: string,
	isOrderable: boolean,
	isFilterable: boolean,
	fieldMeta?: GraphQLTypes["JSON"],
	viewsIndex: number,
	customViewsIndex?: number,
	createView: GraphQLTypes["KeystoneAdminUIFieldMetaCreateView"],
	listView: GraphQLTypes["KeystoneAdminUIFieldMetaListView"],
	itemView?: GraphQLTypes["KeystoneAdminUIFieldMetaItemView"],
	search?: GraphQLTypes["QueryMode"]
};
	["KeystoneAdminUIFieldMetaCreateView"]: {
	__typename: "KeystoneAdminUIFieldMetaCreateView",
	fieldMode: GraphQLTypes["KeystoneAdminUIFieldMetaCreateViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaCreateViewFieldMode"]: KeystoneAdminUIFieldMetaCreateViewFieldMode;
	["KeystoneAdminUIFieldMetaListView"]: {
	__typename: "KeystoneAdminUIFieldMetaListView",
	fieldMode: GraphQLTypes["KeystoneAdminUIFieldMetaListViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaListViewFieldMode"]: KeystoneAdminUIFieldMetaListViewFieldMode;
	["KeystoneAdminUIFieldMetaItemView"]: {
	__typename: "KeystoneAdminUIFieldMetaItemView",
	fieldMode?: GraphQLTypes["KeystoneAdminUIFieldMetaItemViewFieldMode"]
};
	["KeystoneAdminUIFieldMetaItemViewFieldMode"]: KeystoneAdminUIFieldMetaItemViewFieldMode;
	["KeystoneAdminUISort"]: {
	__typename: "KeystoneAdminUISort",
	field: string,
	direction: GraphQLTypes["KeystoneAdminUISortDirection"]
};
	["KeystoneAdminUISortDirection"]: KeystoneAdminUISortDirection
    }
export const enum UserOauthProviderType {
	google = "google",
	instagram = "instagram"
}
export const enum QueryMode {
	default = "default",
	insensitive = "insensitive"
}
export const enum OrderDirection {
	asc = "asc",
	desc = "desc"
}
export const enum PasswordResetRedemptionErrorCode {
	FAILURE = "FAILURE",
	TOKEN_EXPIRED = "TOKEN_EXPIRED",
	TOKEN_REDEEMED = "TOKEN_REDEEMED"
}
export const enum KeystoneAdminUIFieldMetaCreateViewFieldMode {
	edit = "edit",
	hidden = "hidden"
}
export const enum KeystoneAdminUIFieldMetaListViewFieldMode {
	read = "read",
	hidden = "hidden"
}
export const enum KeystoneAdminUIFieldMetaItemViewFieldMode {
	edit = "edit",
	read = "read",
	hidden = "hidden"
}
export const enum KeystoneAdminUISortDirection {
	ASC = "ASC",
	DESC = "DESC"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "Query",
    "mutation": "Mutation"
}

export type GenericOperation<O> = O extends 'query'
  ? "Query"
  : O extends 'mutation'
  ? "Mutation"
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  

export const Gql = Chain('http://localhost:4444/api/graphql')