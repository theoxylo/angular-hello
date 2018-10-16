import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private _name = '';
  @Input() public title: string;
  @Output() private date: EventEmitter<number> = new EventEmitter<number>();
  ajaxTitle: string;
  ajaxTitle2: string;
  http;

  constructor(productService: ProductService, http: HttpService) {
    this.http = http;
  }

  ngOnInit() {
    this.getAjaxData('https://jsonplaceholder.typicode.com/posts/1');
    this.getAjaxData2('https://jsonplaceholder.typicode.com/postsx/1');
  }

  getAjaxData(url: string) {
    this.http.getContent(url)
      .then(data => {
        if (!data.ok) { throw Error(data.status); }
        return data.json();
      })
      .then(msg => {
        console.log(`ajax title: ${msg.title}`);
        this.ajaxTitle = msg.title;
      })
      .catch(error => {
        console.log(error);
        this.ajaxTitle = error.message;
      });
  }

  getAjaxData2(url: string) {
    this.http.getContent2(url)
      .subscribe(msg => {
        console.log(`ajax title 2: ${msg.title}`);
        this.ajaxTitle2 = msg.title;
      });
  }

  handleClick(e) {
    console.log(e);
    console.log('click event available here, but custom event emmitted to parent below');
    this.date.emit(Date.now());
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string {
    return this._name;
  }

}
