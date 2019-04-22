import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipeModule } from '@sheetbase/angular';

import { SkeletonComponentModule } from '../skeleton/skeleton.module';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SafePipeModule,
    SkeletonComponentModule,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentComponentModule { }
