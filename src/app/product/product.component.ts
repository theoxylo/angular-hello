import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private _name = '';

  @Input() public title: string;

  @Output() private date: EventEmitter<number> = new EventEmitter<number>();

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
