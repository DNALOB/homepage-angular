import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'homepage-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
  @Input() tagline: string;
  @Input() actionText: string;
  @Input() image: string;
  @Output() doAction: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
