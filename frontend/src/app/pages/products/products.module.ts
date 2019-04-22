import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ProductsComponentModule } from 'homepage';

import { ComponentsModule } from '../../components/components.module';
import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProductsComponentModule,
    ComponentsModule,
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
