import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements AfterViewInit {

  private _filterString = '';
  private _searchString = '';

  @ViewChild('filterInput') filterRef: ElementRef;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngAfterViewInit() {
    this.filterRef.nativeElement.focus();
  }

  get filterString() {
    return this._filterString;
  }

  set filterString(filter: string) {
    this._filterString = filter.toLowerCase();
    this.filter.emit(this._filterString);
  }

  get searchString() {
    return this._searchString;
  }

  set searchString(search: string) {
    this._searchString = search.toLowerCase();
  }

  doSearch() {
    this.search.emit(this._searchString);
    this._filterString = '';
  }
}
