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
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'product/:productKey', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'post/:postKey', loadChildren: './pages/post/post.module#PostPageModule' },
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
