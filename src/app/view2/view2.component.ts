import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  products;
  filtered_products;

  name = new FormControl();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filtered_products = this.products;
  }

  resetName() {
    this.name.setValue('');
  }

  onSelectById(id) {
    console.log(this.productService.getProductById(id));
  }

  onFilter(filter: string) {
    this.filtered_products = this.products.filter(product => {
      return product.name.toLowerCase().indexOf(filter) >= 0;
    });
  }

  onSearch(search: string) {
    this.onFilter(search);
  }

}
