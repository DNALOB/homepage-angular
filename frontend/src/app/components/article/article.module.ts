import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    ArticleComponent,
  ]
})
export class ArticleComponentModule { }
