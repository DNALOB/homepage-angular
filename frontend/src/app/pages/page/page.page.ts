import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from '@sheetbase/models';
import { DataService, NavService } from '@sheetbase/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  private pageKey: string;

  notFound = false;
  page: Page;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public nav: NavService,
  ) {
  }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    // get page key
    this.pageKey = this.route.snapshot.paramMap.get('pageKey');
    // load data
    if (!!this.pageKey) {
      this.dataService.page(this.pageKey).subscribe(page => {
        if (!!page) {
          this.page = page;
          // set meta
          this.nav.setMeta(page);
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.notFound = true;
    }
  }

}
