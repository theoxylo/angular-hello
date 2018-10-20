import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  product: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.product = this.route.snapshot.paramMap.get('key');
    if (!this.product) { this.product = this.productService.getProduct(); }
  }

  onSubmit() {
    this.productService.setProduct(this.product);
    this.product = '';
  }

}
