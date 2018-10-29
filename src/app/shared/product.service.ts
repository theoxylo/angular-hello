import {Injectable} from '@angular/core';
import {IProduct} from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  currentProduct: IProduct;

  id = 0;

  products: IProduct[] = [
    {id: this.id++, name: 'Good Book'},
    {id: this.id++, name: 'Small Key'}
  ];

  constructor() {
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProduct(name) {
    this.currentProduct = this.products.find(each => each.name === name);
    return this.currentProduct;
  }

  addNewProduct(name) {
    this.currentProduct = {id: this.id++, name: name};
    this.products.push(this.currentProduct);
  }

  getProductById(id) {
    this.currentProduct = this.products.find(each => each.id === id);
    return this.currentProduct;
  }
}
