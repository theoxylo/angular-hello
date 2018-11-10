import {Injectable} from '@angular/core';
import {IProduct} from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id = 0;

  products: IProduct[] = [
    {id: this.id++, name: 'Good Book'},
    {id: this.id++, name: 'Bad Book'}
  ];

  constructor() {
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  addNewProduct(name) {
    const new_product = {id: this.id++, name: name};
    this.products.unshift(new_product);
  }

  getProductById(id) {
    return this.products.find(each => each.id === id);
  }
}
