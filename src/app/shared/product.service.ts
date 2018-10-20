import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product;

  testData = [
    {id: 0, name: 'Good Book'},
    {id: 1, name: 'Small Key'}
  ];

  constructor() {
  }

  getProducts() {
    return this.testData;
  }

  getProduct() {
    return this.product;
  }

  setProduct(t) {
    this.product = t;
  }
}
