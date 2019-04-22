import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@sheetbase/models';
import { NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private productKey: string;

  notFound = false;
  product: Product;

  suggestedProducts: Product[]; // suggested product

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public nav: NavService,
  ) { }

  ngOnInit() {
    this.loadTheme();
  }

  loadTheme() {
    // load key and data
    this.productKey = this.route.snapshot.paramMap.get('productKey');
    this.product = this.nav.get('product');
    // load data
    if (!!this.productKey) {
      this.dataService.product(this.productKey, this.product).subscribe(product => {
        if (!!product) {
          this.product = product;
          // set meta
          this.nav.setMeta(product);
          // load suggested
          this.getSuggestedProducts();
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

  getSuggestedProducts() {
    const productKey = this.productKey;
    const [ category ] = Object.keys(this.product.categories || {});
    const [ tag ] = Object.keys(this.product.tags || {});
    this.dataService.products((product: Product) => {
      return product.$key !== productKey && (
        (!!category && !!product.categories && !!product.categories[category]) ||
        (!!tag && !!product.tags && !!product.tags[tag])
      );
    })
    .subscribe(suggestedProducts => {
      this.suggestedProducts = (suggestedProducts || []).slice(0, 8);
    });
  }

}
