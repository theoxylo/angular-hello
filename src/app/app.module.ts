import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {AppRoutingModule} from './app-routing.module';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { ViewAjaxComponent } from './view-ajax/view-ajax.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    View1Component,
    View2Component,
    FormExampleComponent,
    ViewAjaxComponent,
    FilterSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
