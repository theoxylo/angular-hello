import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ts = Date.now();
  @Input() public title: string;
  @Output() private date: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(e) {
    this.ts = Date.now();
    this.date.emit(this.ts);
  }
}
