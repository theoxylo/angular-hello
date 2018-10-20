import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
