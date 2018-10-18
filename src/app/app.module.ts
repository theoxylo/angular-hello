import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {AppRoutingModule} from './app-routing.module';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
