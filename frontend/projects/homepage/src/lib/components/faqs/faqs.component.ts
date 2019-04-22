import { Component, OnInit, Input } from '@angular/core';

import { Post } from '@sheetbase/models';

@Component({
  selector: 'homepage-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {

  @Input() faqs: Post[];

  constructor() { }

  ngOnInit() {}

}
