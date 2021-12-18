/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = GraphQLTypes["UserAuthenticationWithPasswordResult"] | GraphQLTypes["AuthenticatedItem"]

export type ValueTypes = {
    ["User"]: AliasType<{
	id?:boolean,
	name?:boolean,
	email?:boolean,
	password?:ValueTypes["PasswordState"],
posts?: [{	where:ValueTypes["PostWhereInput"],	orderBy:ValueTypes["PostOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Post"]],
postsCount?: [{	where:ValueTypes["PostWhereInput"]},boolean],
products?: [{	where:ValueTypes["ProductWhereInput"],	orderBy:ValueTypes["ProductOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Product"]],
productsCount?: [{	where:ValueTypes["ProductWhereInput"]},boolean],
		__typename?: boolean
}>;
	["PasswordState"]: AliasType<{
	isSet?:boolean,
		__typename?: boolean
}>;
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
	posts?:ValueTypes["PostManyRelationFilter"] | null,
	products?:ValueTypes["ProductManyRelationFilter"] | null
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
	["UserOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	email?:ValueTypes["OrderDirection"] | null
};
	["OrderDirection"]:OrderDirection;
	["UserUpdateInput"]: {
	name?:string | null,
	email?:string | null,
	password?:string | null,
	posts?:ValueTypes["PostRelateToManyForUpdateInput"] | null,
	products?:ValueTypes["ProductRelateToManyForUpdateInput"] | null
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
	["UserUpdateArgs"]: {
	where:ValueTypes["UserWhereUniqueInput"],
	data:ValueTypes["UserUpdateInput"]
};
	["UserCreateInput"]: {
	name?:string | null,
	email?:string | null,
	password?:string | null,
	posts?:ValueTypes["PostRelateToManyForCreateInput"] | null,
	products?:ValueTypes["ProductRelateToManyForCreateInput"] | null
};
	["PostRelateToManyForCreateInput"]: {
	create?:ValueTypes["PostCreateInput"][],
	connect?:ValueTypes["PostWhereUniqueInput"][]
};
	["ProductRelateToManyForCreateInput"]: {
	create?:ValueTypes["ProductCreateInput"][],
	connect?:ValueTypes["ProductWhereUniqueInput"][]
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
	["DateTime"]:unknown;
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
	photo?:ValueTypes["ProductImage"],
	status?:boolean,
	price?:boolean,
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["ProductWhereUniqueInput"]: {
	id?:string | null
};
	["ProductWhereInput"]: {
	AND?:ValueTypes["ProductWhereInput"][],
	OR?:ValueTypes["ProductWhereInput"][],
	NOT?:ValueTypes["ProductWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	name?:ValueTypes["StringFilter"] | null,
	description?:ValueTypes["StringFilter"] | null,
	photo?:ValueTypes["ProductImageWhereInput"] | null,
	status?:ValueTypes["StringNullableFilter"] | null,
	price?:ValueTypes["IntNullableFilter"] | null,
	user?:ValueTypes["UserWhereInput"] | null
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
	["ProductOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	name?:ValueTypes["OrderDirection"] | null,
	description?:ValueTypes["OrderDirection"] | null,
	status?:ValueTypes["OrderDirection"] | null,
	price?:ValueTypes["OrderDirection"] | null
};
	["ProductUpdateInput"]: {
	name?:string | null,
	description?:string | null,
	photo?:ValueTypes["ProductImageRelateToOneForUpdateInput"] | null,
	status?:string | null,
	price?:number | null,
	user?:ValueTypes["UserRelateToOneForUpdateInput"] | null
};
	["ProductImageRelateToOneForUpdateInput"]: {
	create?:ValueTypes["ProductImageCreateInput"] | null,
	connect?:ValueTypes["ProductImageWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["ProductUpdateArgs"]: {
	where:ValueTypes["ProductWhereUniqueInput"],
	data:ValueTypes["ProductUpdateInput"]
};
	["ProductCreateInput"]: {
	name?:string | null,
	description?:string | null,
	photo?:ValueTypes["ProductImageRelateToOneForCreateInput"] | null,
	status?:string | null,
	price?:number | null,
	user?:ValueTypes["UserRelateToOneForCreateInput"] | null
};
	["ProductImageRelateToOneForCreateInput"]: {
	create?:ValueTypes["ProductImageCreateInput"] | null,
	connect?:ValueTypes["ProductImageWhereUniqueInput"] | null
};
	["ProductImage"]: AliasType<{
	id?:boolean,
	image?:ValueTypes["CloudinaryImage_File"],
	altText?:boolean,
	product?:ValueTypes["Product"],
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
	["ProductImageWhereUniqueInput"]: {
	id?:string | null
};
	["ProductImageWhereInput"]: {
	AND?:ValueTypes["ProductImageWhereInput"][],
	OR?:ValueTypes["ProductImageWhereInput"][],
	NOT?:ValueTypes["ProductImageWhereInput"][],
	id?:ValueTypes["IDFilter"] | null,
	altText?:ValueTypes["StringFilter"] | null,
	product?:ValueTypes["ProductWhereInput"] | null
};
	["ProductImageOrderByInput"]: {
	id?:ValueTypes["OrderDirection"] | null,
	altText?:ValueTypes["OrderDirection"] | null
};
	["ProductImageUpdateInput"]: {
	image?:ValueTypes["Upload"] | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForUpdateInput"] | null
};
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:unknown;
	["ProductRelateToOneForUpdateInput"]: {
	create?:ValueTypes["ProductCreateInput"] | null,
	connect?:ValueTypes["ProductWhereUniqueInput"] | null,
	disconnect?:boolean | null
};
	["ProductImageUpdateArgs"]: {
	where:ValueTypes["ProductImageWhereUniqueInput"],
	data:ValueTypes["ProductImageUpdateInput"]
};
	["ProductImageCreateInput"]: {
	image?:ValueTypes["Upload"] | null,
	altText?:string | null,
	product?:ValueTypes["ProductRelateToOneForCreateInput"] | null
};
	["ProductRelateToOneForCreateInput"]: {
	create?:ValueTypes["ProductCreateInput"] | null,
	connect?:ValueTypes["ProductWhereUniqueInput"] | null
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
createProductImage?: [{	data:ValueTypes["ProductImageCreateInput"]},ValueTypes["ProductImage"]],
createProductImages?: [{	data:ValueTypes["ProductImageCreateInput"][]},ValueTypes["ProductImage"]],
updateProductImage?: [{	where:ValueTypes["ProductImageWhereUniqueInput"],	data:ValueTypes["ProductImageUpdateInput"]},ValueTypes["ProductImage"]],
updateProductImages?: [{	data:ValueTypes["ProductImageUpdateArgs"][]},ValueTypes["ProductImage"]],
deleteProductImage?: [{	where:ValueTypes["ProductImageWhereUniqueInput"]},ValueTypes["ProductImage"]],
deleteProductImages?: [{	where:ValueTypes["ProductImageWhereUniqueInput"][]},ValueTypes["ProductImage"]],
createTag?: [{	data:ValueTypes["TagCreateInput"]},ValueTypes["Tag"]],
createTags?: [{	data:ValueTypes["TagCreateInput"][]},ValueTypes["Tag"]],
updateTag?: [{	where:ValueTypes["TagWhereUniqueInput"],	data:ValueTypes["TagUpdateInput"]},ValueTypes["Tag"]],
updateTags?: [{	data:ValueTypes["TagUpdateArgs"][]},ValueTypes["Tag"]],
deleteTag?: [{	where:ValueTypes["TagWhereUniqueInput"]},ValueTypes["Tag"]],
deleteTags?: [{	where:ValueTypes["TagWhereUniqueInput"][]},ValueTypes["Tag"]],
	endSession?:boolean,
authenticateUserWithPassword?: [{	email:string,	password:string},ValueTypes["UserAuthenticationWithPasswordResult"]],
createInitialUser?: [{	data:ValueTypes["CreateInitialUserInput"]},ValueTypes["UserAuthenticationWithPasswordSuccess"]],
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
productImages?: [{	where:ValueTypes["ProductImageWhereInput"],	orderBy:ValueTypes["ProductImageOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["ProductImage"]],
productImage?: [{	where:ValueTypes["ProductImageWhereUniqueInput"]},ValueTypes["ProductImage"]],
productImagesCount?: [{	where:ValueTypes["ProductImageWhereInput"]},boolean],
tags?: [{	where:ValueTypes["TagWhereInput"],	orderBy:ValueTypes["TagOrderByInput"][],	take?:number | null,	skip:number},ValueTypes["Tag"]],
tag?: [{	where:ValueTypes["TagWhereUniqueInput"]},ValueTypes["Tag"]],
tagsCount?: [{	where:ValueTypes["TagWhereInput"]},boolean],
	keystone?:ValueTypes["KeystoneMeta"],
	authenticatedItem?:ValueTypes["AuthenticatedItem"],
		__typename?: boolean
}>;
	["AuthenticatedItem"]: AliasType<{		["...on User"] : ValueTypes["User"]
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
	password?:ModelTypes["PasswordState"],
	posts?:ModelTypes["Post"][],
	postsCount?:number,
	products?:ModelTypes["Product"][],
	productsCount?:number
};
	["PasswordState"]: {
		isSet:boolean
};
	["UserWhereUniqueInput"]: GraphQLTypes["UserWhereUniqueInput"];
	["UserWhereInput"]: GraphQLTypes["UserWhereInput"];
	["IDFilter"]: GraphQLTypes["IDFilter"];
	["StringFilter"]: GraphQLTypes["StringFilter"];
	["QueryMode"]: GraphQLTypes["QueryMode"];
	["NestedStringFilter"]: GraphQLTypes["NestedStringFilter"];
	["PostManyRelationFilter"]: GraphQLTypes["PostManyRelationFilter"];
	["ProductManyRelationFilter"]: GraphQLTypes["ProductManyRelationFilter"];
	["UserOrderByInput"]: GraphQLTypes["UserOrderByInput"];
	["OrderDirection"]: GraphQLTypes["OrderDirection"];
	["UserUpdateInput"]: GraphQLTypes["UserUpdateInput"];
	["PostRelateToManyForUpdateInput"]: GraphQLTypes["PostRelateToManyForUpdateInput"];
	["ProductRelateToManyForUpdateInput"]: GraphQLTypes["ProductRelateToManyForUpdateInput"];
	["UserUpdateArgs"]: GraphQLTypes["UserUpdateArgs"];
	["UserCreateInput"]: GraphQLTypes["UserCreateInput"];
	["PostRelateToManyForCreateInput"]: GraphQLTypes["PostRelateToManyForCreateInput"];
	["ProductRelateToManyForCreateInput"]: GraphQLTypes["ProductRelateToManyForCreateInput"];
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
	["DateTime"]:any;
	["PostWhereUniqueInput"]: GraphQLTypes["PostWhereUniqueInput"];
	["PostWhereInput"]: GraphQLTypes["PostWhereInput"];
	["StringNullableFilter"]: GraphQLTypes["StringNullableFilter"];
	["NestedStringNullableFilter"]: GraphQLTypes["NestedStringNullableFilter"];
	["DateTimeNullableFilter"]: GraphQLTypes["DateTimeNullableFilter"];
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
	photo?:ModelTypes["ProductImage"],
	status?:string,
	price?:number,
	user?:ModelTypes["User"]
};
	["ProductWhereUniqueInput"]: GraphQLTypes["ProductWhereUniqueInput"];
	["ProductWhereInput"]: GraphQLTypes["ProductWhereInput"];
	["IntNullableFilter"]: GraphQLTypes["IntNullableFilter"];
	["ProductOrderByInput"]: GraphQLTypes["ProductOrderByInput"];
	["ProductUpdateInput"]: GraphQLTypes["ProductUpdateInput"];
	["ProductImageRelateToOneForUpdateInput"]: GraphQLTypes["ProductImageRelateToOneForUpdateInput"];
	["ProductUpdateArgs"]: GraphQLTypes["ProductUpdateArgs"];
	["ProductCreateInput"]: GraphQLTypes["ProductCreateInput"];
	["ProductImageRelateToOneForCreateInput"]: GraphQLTypes["ProductImageRelateToOneForCreateInput"];
	["ProductImage"]: {
		id:string,
	image?:ModelTypes["CloudinaryImage_File"],
	altText?:string,
	product?:ModelTypes["Product"]
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
	["ProductImageWhereUniqueInput"]: GraphQLTypes["ProductImageWhereUniqueInput"];
	["ProductImageWhereInput"]: GraphQLTypes["ProductImageWhereInput"];
	["ProductImageOrderByInput"]: GraphQLTypes["ProductImageOrderByInput"];
	["ProductImageUpdateInput"]: GraphQLTypes["ProductImageUpdateInput"];
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:any;
	["ProductRelateToOneForUpdateInput"]: GraphQLTypes["ProductRelateToOneForUpdateInput"];
	["ProductImageUpdateArgs"]: GraphQLTypes["ProductImageUpdateArgs"];
	["ProductImageCreateInput"]: GraphQLTypes["ProductImageCreateInput"];
	["ProductRelateToOneForCreateInput"]: GraphQLTypes["ProductRelateToOneForCreateInput"];
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
	createProductImage?:ModelTypes["ProductImage"],
	createProductImages?:(ModelTypes["ProductImage"] | undefined)[],
	updateProductImage?:ModelTypes["ProductImage"],
	updateProductImages?:(ModelTypes["ProductImage"] | undefined)[],
	deleteProductImage?:ModelTypes["ProductImage"],
	deleteProductImages?:(ModelTypes["ProductImage"] | undefined)[],
	createTag?:ModelTypes["Tag"],
	createTags?:(ModelTypes["Tag"] | undefined)[],
	updateTag?:ModelTypes["Tag"],
	updateTags?:(ModelTypes["Tag"] | undefined)[],
	deleteTag?:ModelTypes["Tag"],
	deleteTags?:(ModelTypes["Tag"] | undefined)[],
	endSession:boolean,
	authenticateUserWithPassword?:ModelTypes["UserAuthenticationWithPasswordResult"],
	createInitialUser:ModelTypes["UserAuthenticationWithPasswordSuccess"]
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
	productImages?:ModelTypes["ProductImage"][],
	productImage?:ModelTypes["ProductImage"],
	productImagesCount?:number,
	tags?:ModelTypes["Tag"][],
	tag?:ModelTypes["Tag"],
	tagsCount?:number,
	keystone:ModelTypes["KeystoneMeta"],
	authenticatedItem?:ModelTypes["AuthenticatedItem"]
};
	["AuthenticatedItem"]:ModelTypes["User"];
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
	password?: GraphQLTypes["PasswordState"],
	posts?: Array<GraphQLTypes["Post"]>,
	postsCount?: number,
	products?: Array<GraphQLTypes["Product"]>,
	productsCount?: number
};
	["PasswordState"]: {
	__typename: "PasswordState",
	isSet: boolean
};
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
	posts?: GraphQLTypes["PostManyRelationFilter"],
	products?: GraphQLTypes["ProductManyRelationFilter"]
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
	["UserOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	email?: GraphQLTypes["OrderDirection"]
};
	["OrderDirection"]: OrderDirection;
	["UserUpdateInput"]: {
		name?: string,
	email?: string,
	password?: string,
	posts?: GraphQLTypes["PostRelateToManyForUpdateInput"],
	products?: GraphQLTypes["ProductRelateToManyForUpdateInput"]
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
	["UserUpdateArgs"]: {
		where: GraphQLTypes["UserWhereUniqueInput"],
	data: GraphQLTypes["UserUpdateInput"]
};
	["UserCreateInput"]: {
		name?: string,
	email?: string,
	password?: string,
	posts?: GraphQLTypes["PostRelateToManyForCreateInput"],
	products?: GraphQLTypes["ProductRelateToManyForCreateInput"]
};
	["PostRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["PostCreateInput"]>,
	connect?: Array<GraphQLTypes["PostWhereUniqueInput"]>
};
	["ProductRelateToManyForCreateInput"]: {
		create?: Array<GraphQLTypes["ProductCreateInput"]>,
	connect?: Array<GraphQLTypes["ProductWhereUniqueInput"]>
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
	["DateTime"]:any;
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
	photo?: GraphQLTypes["ProductImage"],
	status?: string,
	price?: number,
	user?: GraphQLTypes["User"]
};
	["ProductWhereUniqueInput"]: {
		id?: string
};
	["ProductWhereInput"]: {
		AND?: Array<GraphQLTypes["ProductWhereInput"]>,
	OR?: Array<GraphQLTypes["ProductWhereInput"]>,
	NOT?: Array<GraphQLTypes["ProductWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	name?: GraphQLTypes["StringFilter"],
	description?: GraphQLTypes["StringFilter"],
	photo?: GraphQLTypes["ProductImageWhereInput"],
	status?: GraphQLTypes["StringNullableFilter"],
	price?: GraphQLTypes["IntNullableFilter"],
	user?: GraphQLTypes["UserWhereInput"]
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
	["ProductOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	name?: GraphQLTypes["OrderDirection"],
	description?: GraphQLTypes["OrderDirection"],
	status?: GraphQLTypes["OrderDirection"],
	price?: GraphQLTypes["OrderDirection"]
};
	["ProductUpdateInput"]: {
		name?: string,
	description?: string,
	photo?: GraphQLTypes["ProductImageRelateToOneForUpdateInput"],
	status?: string,
	price?: number,
	user?: GraphQLTypes["UserRelateToOneForUpdateInput"]
};
	["ProductImageRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["ProductImageCreateInput"],
	connect?: GraphQLTypes["ProductImageWhereUniqueInput"],
	disconnect?: boolean
};
	["ProductUpdateArgs"]: {
		where: GraphQLTypes["ProductWhereUniqueInput"],
	data: GraphQLTypes["ProductUpdateInput"]
};
	["ProductCreateInput"]: {
		name?: string,
	description?: string,
	photo?: GraphQLTypes["ProductImageRelateToOneForCreateInput"],
	status?: string,
	price?: number,
	user?: GraphQLTypes["UserRelateToOneForCreateInput"]
};
	["ProductImageRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["ProductImageCreateInput"],
	connect?: GraphQLTypes["ProductImageWhereUniqueInput"]
};
	["ProductImage"]: {
	__typename: "ProductImage",
	id: string,
	image?: GraphQLTypes["CloudinaryImage_File"],
	altText?: string,
	product?: GraphQLTypes["Product"]
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
	["ProductImageWhereUniqueInput"]: {
		id?: string
};
	["ProductImageWhereInput"]: {
		AND?: Array<GraphQLTypes["ProductImageWhereInput"]>,
	OR?: Array<GraphQLTypes["ProductImageWhereInput"]>,
	NOT?: Array<GraphQLTypes["ProductImageWhereInput"]>,
	id?: GraphQLTypes["IDFilter"],
	altText?: GraphQLTypes["StringFilter"],
	product?: GraphQLTypes["ProductWhereInput"]
};
	["ProductImageOrderByInput"]: {
		id?: GraphQLTypes["OrderDirection"],
	altText?: GraphQLTypes["OrderDirection"]
};
	["ProductImageUpdateInput"]: {
		image?: GraphQLTypes["Upload"],
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForUpdateInput"]
};
	/** The `Upload` scalar type represents a file upload. */
["Upload"]:any;
	["ProductRelateToOneForUpdateInput"]: {
		create?: GraphQLTypes["ProductCreateInput"],
	connect?: GraphQLTypes["ProductWhereUniqueInput"],
	disconnect?: boolean
};
	["ProductImageUpdateArgs"]: {
		where: GraphQLTypes["ProductImageWhereUniqueInput"],
	data: GraphQLTypes["ProductImageUpdateInput"]
};
	["ProductImageCreateInput"]: {
		image?: GraphQLTypes["Upload"],
	altText?: string,
	product?: GraphQLTypes["ProductRelateToOneForCreateInput"]
};
	["ProductRelateToOneForCreateInput"]: {
		create?: GraphQLTypes["ProductCreateInput"],
	connect?: GraphQLTypes["ProductWhereUniqueInput"]
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
	createProductImage?: GraphQLTypes["ProductImage"],
	createProductImages?: Array<GraphQLTypes["ProductImage"] | undefined>,
	updateProductImage?: GraphQLTypes["ProductImage"],
	updateProductImages?: Array<GraphQLTypes["ProductImage"] | undefined>,
	deleteProductImage?: GraphQLTypes["ProductImage"],
	deleteProductImages?: Array<GraphQLTypes["ProductImage"] | undefined>,
	createTag?: GraphQLTypes["Tag"],
	createTags?: Array<GraphQLTypes["Tag"] | undefined>,
	updateTag?: GraphQLTypes["Tag"],
	updateTags?: Array<GraphQLTypes["Tag"] | undefined>,
	deleteTag?: GraphQLTypes["Tag"],
	deleteTags?: Array<GraphQLTypes["Tag"] | undefined>,
	endSession: boolean,
	authenticateUserWithPassword?: GraphQLTypes["UserAuthenticationWithPasswordResult"],
	createInitialUser: GraphQLTypes["UserAuthenticationWithPasswordSuccess"]
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
	productImages?: Array<GraphQLTypes["ProductImage"]>,
	productImage?: GraphQLTypes["ProductImage"],
	productImagesCount?: number,
	tags?: Array<GraphQLTypes["Tag"]>,
	tag?: GraphQLTypes["Tag"],
	tagsCount?: number,
	keystone: GraphQLTypes["KeystoneMeta"],
	authenticatedItem?: GraphQLTypes["AuthenticatedItem"]
};
	["AuthenticatedItem"]:{
	__typename:"User"
	['...on User']: '__union' & GraphQLTypes["User"];
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
export const enum QueryMode {
	default = "default",
	insensitive = "insensitive"
}
export const enum OrderDirection {
	asc = "asc",
	desc = "desc"
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