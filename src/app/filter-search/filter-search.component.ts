import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements AfterViewInit {

  private _filterString: string;
  @ViewChild('filterInput') filterRef: ElementRef;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngAfterViewInit() {
    this.filterRef.nativeElement.focus();
  }

  get filterString() {
    return this._filter;
  }

  set filterString(filter: string) {
    this._filter = filter.toLowerCase();
    this.filter.emit(this._filter);
  }

}
