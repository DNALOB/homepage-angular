import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { Product } from '@sheetbase/models';
import { CurrencyService } from '@sheetbase/angular';

@Component({
  selector: 'homepage-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  paginationConfigs: PaginationInstance = {
    id: 'products',
    itemsPerPage: 30,
    currentPage: 1,
  };

  @Input() products: Product[];
  @Input() showPagination = false;
  @Output() view: EventEmitter<Product> = new EventEmitter();
  @Output() goCheckout: EventEmitter<Product> = new EventEmitter();
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  constructor(
    public currencyService: CurrencyService,
  ) { }

  ngOnInit() {}

}
