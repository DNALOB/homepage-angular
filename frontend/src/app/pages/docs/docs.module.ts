import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { ArticlesComponentModule } from '../../components/articles/articles.module';
import { ArticleComponentModule } from '../../components/article/article.module';
import { DocsPage } from './docs.page';

const routes: Routes = [
  {
    path: '',
    component: DocsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ArticlesComponentModule,
    ArticleComponentModule,
  ],
  declarations: [DocsPage]
})
export class DocsPageModule {}
