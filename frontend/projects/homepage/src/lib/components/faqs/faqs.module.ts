import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsComponent } from './faqs.component';

@NgModule({
  declarations: [
    FaqsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FaqsComponent,
  ]
})
export class FaqsComponentModule { }
