import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  testData = [
    {id: 0, name: 'Good Book'},
    {id: 1, name: 'Small Key'}
  ];

  constructor() {
  }

  getProducts() {
    return this.testData;
  }
}
