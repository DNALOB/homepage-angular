import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

import { Link, NavService } from '@sheetbase/angular';

@Component({
  selector: 'homepage-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() nav: NavService;
  @Input() name: string;
  @Input() socials: Link[];
  @Input() links: Link[];
  @Output() goHome: EventEmitter<void> = new EventEmitter();

  showMenu = false;

  @HostListener('document:click', ['$event']) clickout(e) {
    // click outside header
    if (!this.elemRef.nativeElement.contains(e.target)) {
      this.showMenu = false;
    }
  }

  constructor(
    private elemRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.showMenu = !this.showMenu;
  }

}
