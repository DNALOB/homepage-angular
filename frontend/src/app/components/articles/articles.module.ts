import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticlesComponent,
  ]
})
export class ArticlesComponentModule { }
