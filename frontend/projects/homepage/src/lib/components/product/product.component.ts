import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '@sheetbase/models';
import { CurrencyService } from '@sheetbase/angular';

@Component({
  selector: 'homepage-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() goCheckout: EventEmitter<Product> = new EventEmitter();

  constructor(
    public currencyService: CurrencyService,
  ) { }

  ngOnInit() {}

}
