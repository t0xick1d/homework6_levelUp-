// export interface PeriodicElement {
//   name: string;
//   sku: string;
//   price: number;
//   country: string;
//   tags: string[];
//   id: string;
// }
export interface Product {
  productID: number;
  name: string;
  price: number;
  discount: number;
  sku: string;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
  image: string;
  token: string;
}

export interface DialogData {
  id: string;
}
