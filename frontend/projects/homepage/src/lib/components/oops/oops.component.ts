import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'homepage-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsComponent implements OnInit {

  @Output() goHome: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
