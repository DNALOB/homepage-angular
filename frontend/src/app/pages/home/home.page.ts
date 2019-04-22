import { Component, OnInit } from '@angular/core';

import { Post, Product, Message } from '@sheetbase/models';
import { AppService, NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[];
  features: Post[];
  faqs: Post[];

  constructor(
    private dataService: DataService,
    public appService: AppService,
    public nav: NavService,
  ) {}

  ngOnInit() {
    // products
    this.dataService.products().subscribe(products => {
      this.products = (products || []).slice(0, 20);
    });
    // features
    this.dataService.posts({ type: 'featured' })
    .subscribe(features => {
      this.features = features;
    });
    // faqs
    this.dataService.posts({ type: 'faq' })
    .subscribe(faqs => {
      this.faqs = faqs;
    });
    // set meta
    this.nav.setMeta();
  }

  async sendMessage(message: Message) {
    await this.dataService.addMessageExtra(message);
  }

}
