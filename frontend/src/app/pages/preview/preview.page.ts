import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@sheetbase/models';
import { NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  private productKey: string;

  product: Product;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    public nav: NavService,
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    // load key and data
    this.productKey = this.route.snapshot.paramMap.get('productKey');
    this.product = this.nav.get('product');
    // load data
    if (!!this.productKey) {
      this.dataService.product(this.productKey, this.product).subscribe(product => {
        if (!!product) {
          this.product = product;
          // set meta
          this.nav.setMeta({ title: 'Sheetbase Preview' });
        } else {
          this.goHome();
        }
      });
    } else {
      this.goHome();
    }
  }

  goHome() {
    return this.nav.navigate(['/']);
  }

}
