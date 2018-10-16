import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  testData = [
    {id: 0, name: 'Sam'},
    {id: 1, name: 'Jill'}
  ];

  constructor() {
  }

  getData() {
    return this.testData;
  }
}
