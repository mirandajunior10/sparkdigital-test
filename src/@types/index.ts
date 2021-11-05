
export enum TypesEnum {
  product = 'product',
  company = 'company',
  animal = 'animal'

}

export interface Item {
  type: TypesEnum
  id: string;
  starred: boolean;
  name: string;
}
export interface Product extends Item {
  productCategory: string;
  previewText: string;
  image?: string
}

export interface Company extends Item {
  description: string;
  address: Address;
}

export interface Animal extends Item {
  taxonomy: Taxonomy;
  image?: string;
}

export interface Address {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Taxonomy {
  family: string;
  scientificName: string;
}