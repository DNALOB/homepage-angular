import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SafePipeModule } from '@sheetbase/angular';

import { PreviewPage } from './preview.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SafePipeModule,
  ],
  declarations: [PreviewPage]
})
export class PreviewPageModule {}
