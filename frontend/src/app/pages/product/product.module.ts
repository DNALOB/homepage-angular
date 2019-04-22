import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {
  TitleComponentModule,
  OopsComponentModule,
  SkeletonComponentModule,
  ProductComponentModule,
  ProductsComponentModule,
} from 'homepage';

import { ComponentsModule } from '../../components/components.module';
import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TitleComponentModule,
    OopsComponentModule,
    SkeletonComponentModule,
    ProductComponentModule,
    ProductsComponentModule,
    ComponentsModule,
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
