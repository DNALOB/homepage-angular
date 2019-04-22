import { Component, OnInit } from '@angular/core';

import { Category, Product } from '@sheetbase/models';
import { AppService, NavService, DataService, filter } from '@sheetbase/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  searchStr: string;

  allProducts: Product[];
  productsByCategory: {[categoryKey: string]: Product[]} = {};
  filteredProducts: Product[];

  categories: Category[];
  category: Category;

  constructor(
    private dataService: DataService,
    public appService: AppService,
    public nav: NavService,
  ) {
  }

  ngOnInit() {
    // get categories
    this.dataService.categories({ only: 'products' }).subscribe(categories => {
      this.categories = categories;
    });
    // get products
    this.dataService.products().subscribe(products => {
      this.allProducts = products;
      this.filteredProducts = this.allProducts;
      // pre sort products by category
      for (let i = 0; i < (products || []).length; i++) {
        const product = products[i];
        for (const categoryKey of Object.keys(product.categories || {})) {
          this.productsByCategory[categoryKey] = [
            ... this.productsByCategory[categoryKey] || [],
            product,
          ];
        }
      }
    });
    // set meta
    this.nav.setMeta({ title: 'Themes', description: 'Sheetbase ready-to-use themes.' });
  }

  selectCategory(category: Category) {
    if (!!this.category && category.$key === this.category.$key) {
      this.filteredProducts = this.allProducts;
      this.category = null;
    } else {
      this.filteredProducts = this.productsByCategory[category.$key] || [];
      this.category = category;
    }
  }

  products() {
    const products = !!this.searchStr ? filter(this.filteredProducts, this.searchStr) : this.filteredProducts;
    return (products || []);
  }

}
