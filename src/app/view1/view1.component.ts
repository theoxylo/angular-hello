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

  product: IProduct;
  products;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const productName = this.route.snapshot.paramMap.get('key');
    if (productName) { this.product = this.productService.getProduct(productName); }
    if (!this.product) { this.product = {id: 0, name: productName}; }

    this.products = this.productService.getProducts();
  }

  onSubmit() {
    this.productService.addNewProduct(this.product.name);
    this.product.name = '';
  }

}
