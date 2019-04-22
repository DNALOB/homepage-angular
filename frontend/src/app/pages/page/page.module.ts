import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OopsComponentModule, SkeletonComponentModule, ContentComponentModule } from 'homepage';

import { ComponentsModule } from '../../components/components.module';
import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: '',
    component: PagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    OopsComponentModule,
    SkeletonComponentModule,
    ContentComponentModule,
    ComponentsModule,
  ],
  declarations: [PagePage]
})
export class PagePageModule {}
