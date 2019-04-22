import { Component, OnInit, Input } from '@angular/core';

import { Post } from '@sheetbase/models';

@Component({
  selector: 'homepage-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {

  @Input() features: Post[];

  constructor() { }

  ngOnInit() {}

}
