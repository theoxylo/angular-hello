import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  title;

  testData = [
    {id: 0, name: 'Good Book'},
    {id: 1, name: 'Small Key'}
  ];

  constructor() {
  }

  getProducts() {
    return this.testData;
  }

  getTitle() {
    return this.title;
  }

  setTitle(t) {
    this.title = t;
  }
}
