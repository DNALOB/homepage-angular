import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductsComponentModule { }
