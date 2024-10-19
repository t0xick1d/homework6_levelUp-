import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  sku: string;
  price: number;
  country: string;
  tags: string[];
  actions: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Laptop',
    sku: '12345-AB',
    price: 999.99,
    country: 'us',
    tags: ['electronics', 'computer', 'tech'],
    actions: ['buy', 'wishlist'],
  },
  {
    name: 'Smartphone',
    sku: '98765-CD',
    price: 799.99,
    country: 'kr',
    tags: ['mobile', 'gadgets', 'tech'],
    actions: ['buy', 'wishlist', 'compare'],
  },
  {
    name: 'Headphones',
    sku: '54321-EF',
    price: 199.99,
    country: 'de',
    tags: ['audio', 'music', 'tech'],
    actions: ['buy', 'wishlist'],
  },
  {
    name: 'Gaming Console',
    sku: '11223-GH',
    price: 499.99,
    country: 'jp',
    tags: ['gaming', 'console', 'entertainment'],
    actions: ['buy', 'wishlist', 'pre-order'],
  },
  {
    name: 'Tablet',
    sku: '33445-IJ',
    price: 349.99,
    country: 'cn',
    tags: ['electronics', 'tablet', 'tech'],
    actions: ['buy', 'wishlist', 'compare'],
  },
  {
    name: 'Smartwatch',
    sku: '55667-KL',
    price: 249.99,
    country: 'us',
    tags: ['wearables', 'tech', 'gadgets'],
    actions: ['buy', 'wishlist'],
  },
  {
    name: 'Camera',
    sku: '77889-MN',
    price: 1299.99,
    country: 'jp',
    tags: ['photography', 'camera', 'tech'],
    actions: ['buy', 'wishlist', 'compare'],
  },
  {
    name: 'Electric Toothbrush',
    sku: '99001-OP',
    price: 89.99,
    country: 'us',
    tags: ['health', 'gadgets', 'wellness'],
    actions: ['buy', 'wishlist'],
  },
  {
    name: 'Wireless Charger',
    sku: '11223-QR',
    price: 29.99,
    country: 'cn',
    tags: ['accessories', 'tech', 'mobile'],
    actions: ['buy', 'wishlist'],
  },
  {
    name: 'Coffee Maker',
    sku: '33445-ST',
    price: 149.99,
    country: 'it',
    tags: ['kitchen', 'appliances', 'coffee'],
    actions: ['buy', 'wishlist'],
  },
];
@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public dataSource = ELEMENT_DATA;
  public displayedColumns: string[] = [
    'name',
    'sku',
    'price',
    'country',
    'tags',
    'actions',
  ];
}
