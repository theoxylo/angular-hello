import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements AfterViewInit, OnInit {

  new_product: IProduct;
  products: IProduct[];
  filtered_products: IProduct[];
  private _filter: string;
  search = '';
  ts;

  @ViewChild('filterInput') filterRef: ElementRef;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.new_product = {id: 0, name: ''};

    this.products = this.productService.getProducts();
    this.filtered_products = this.products;

    const productName = this.route.snapshot.paramMap.get('key');
    if (productName) {
      this.new_product = {id: 0, name: productName};
    }
  }

  ngAfterViewInit() {
    this.filterRef.nativeElement.focus();
  }

  onSubmit() {
    this.productService.addNewProduct(this.new_product.name);
    this.new_product.name = '';
    this._filter = '';
    this.filterProducts(this._filter);
    this.filterRef.nativeElement.focus();
  }

  get filter() {
    return this._filter;
  }

  set filter(name: string) {
    this._filter = name.toLowerCase();
    this.filterProducts(this._filter);
  }

  filterProducts(filter: string) {
    this.filtered_products = this.products.filter(product => {
      return product.name.toLowerCase().indexOf(filter) >= 0;
    });
  }

  onSearch() {
    this.filterProducts(this.search);
  }
}
