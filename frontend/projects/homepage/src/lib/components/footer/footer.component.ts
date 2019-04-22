import { Component, OnInit, Input } from '@angular/core';

import { Link } from '@sheetbase/angular';

@Component({
  selector: 'homepage-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() socials: Link[];
  @Input() links: Link[];
  @Input() attribution = true;

  constructor() { }

  ngOnInit() {
  }

}
