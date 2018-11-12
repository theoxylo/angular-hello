import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {IProduct} from '../iproduct';
import {FilterSearchComponent} from '../filter-search/filter-search.component';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements AfterViewInit, OnInit {

  new_product: IProduct;
  products: IProduct[];
  filtered_products: IProduct[];
  private filter = '';
  ts;

  @ViewChild(FilterSearchComponent) ref: FilterSearchComponent;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filtered_products = this.products;

    const productName = this.route.snapshot.paramMap.get('key');
    if (productName) {
      this.new_product = {id: 0, name: productName};
    } else {
      this.new_product = {id: 0, name: ''};
    }
  }

  ngAfterViewInit() {
  }

  onSubmit() {
    this.productService.addNewProduct(this.new_product.name);
    this.new_product.name = '';
    this.ref.filterString = '';
    this.onFilter('');
  }

  onFilter(filter: string) {
    this.filtered_products = this.products.filter(product => {
      return product.name.toLowerCase().indexOf(filter) >= 0;
    });
  }

  onSearch(search: string) {
    this.onFilter(search);
  }

}
