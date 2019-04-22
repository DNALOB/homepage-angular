import { Component, OnInit } from '@angular/core';

import { Message } from '@sheetbase/models';
import { AppService, NavService, DataService } from '@sheetbase/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    public dataService: DataService,
    public nav: NavService,
    public appService: AppService,
  ) { }

  ngOnInit() {
    // set meta
    this.nav.setMeta({ title: 'Contact us', description: 'Let get in touch!' });
  }

  async sendMessage(message: Message) {
    await this.dataService.addMessageExtra(message);
  }

}
