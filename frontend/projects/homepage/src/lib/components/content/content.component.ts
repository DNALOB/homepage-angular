import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'homepage-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  @Input() content = '';

  constructor() { }

  ngOnInit() {}

}
