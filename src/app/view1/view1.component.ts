import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  title: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('key');
    if (!this.title) { this.title = this.productService.getTitle(); }
  }

  onSubmit() {
    this.productService.setTitle(this.title);
    this.title = '';
  }

}
