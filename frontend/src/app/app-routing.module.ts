import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/home/home.module#HomePageModule', pathMatch: 'full' },
  {
    path: 'page/:pageKey',
    loadChildren: './pages/page/page.module#PagePageModule',
  },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'themes', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'theme/:productKey', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'preview/:productKey', loadChildren: './pages/preview/preview.module#PreviewPageModule' },
  { path: 'docs', loadChildren: './pages/docs/docs.module#DocsPageModule' },
  { path: 'doc/:postKey', loadChildren: './pages/docs/docs.module#DocsPageModule' },
  {
    path: '**',
    loadChildren: './pages/not-found/not-found.module#NotFoundPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
