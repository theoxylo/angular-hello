import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../message';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  keyVal;

  model = new Message('title');

  submitted = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.keyVal = this.route.snapshot.paramMap.get('key');
    this.model.title = this.keyVal;
  }

  onSubmit() {
    this.submitted = true;
    this.productService.setTitle(this.model.title);
    this.model.title = '';
  }

}
