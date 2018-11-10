import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  new_product: IProduct;
  products: IProduct[];
  filtered_products: IProduct[];
  private _filter: string;
  ts;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.new_product = {name: ''};

    this.products = this.productService.getProducts();
    this.filtered_products = this.products;

    const productName = this.route.snapshot.paramMap.get('key');
    if (productName) {
      this.new_product = {id: 0, name: productName};
    }
  }

  onSubmit() {
    this.productService.addNewProduct(this.new_product.name);
    this.new_product.name = '';
    this._filter = '';
    this.filterProducts();
  }

  get filter() {
    return this._filter;
  }

  set filter(name: string) {
    console.log('setting name: ' + name);
    this._filter = name.toLowerCase();
    this.filterProducts();
  }

  filterProducts() {
    this.filtered_products = this.products.filter(prod => {
      return prod.name.toLowerCase().indexOf(this._filter) >= 0;
    });
  }
}
