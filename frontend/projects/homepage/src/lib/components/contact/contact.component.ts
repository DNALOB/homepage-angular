import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import * as _localforage from 'localforage';
const localforage = _localforage;

import { Message } from '@sheetbase/models';

@Component({
  selector: 'homepage-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  SHEETBASE_CONTACT = 'SHEETBASE_CONTACT';

  @Input() email: string;
  @Input() facebook: string;
  @Output() sendMessage: EventEmitter<Message> = new EventEmitter();

  contactFormGroup: FormGroup;
  lockdown = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
  ) {
    this.contactFormGroup = this.formBuilder.group({
      'name': new FormControl('', [
        Validators.required,
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'message': new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {
    localforage.getItem(this.SHEETBASE_CONTACT)
    .then(info => {
      const { name = '', email = '' } = info || {} as any;
      this.contactFormGroup.get('name').setValue(name);
      this.contactFormGroup.get('email').setValue(email);
    });
  }

  messengerUrl() {
    return 'https://m.me/' + (this.facebook || '').split('/').pop();
  }

  async sendMessageEmit() {
    // handler
    const handler = async () => {
      this.lockdown = true;
      setTimeout(() => { this.lockdown = false; }, 5000);
      // emit
      const name = this.contactFormGroup.get('name').value;
      const email = this.contactFormGroup.get('email').value;
      this.sendMessage.emit({
        name,
        email,
        message: this.contactFormGroup.get('message').value,
      });
      // save info
      await localforage.setItem(this.SHEETBASE_CONTACT, { name, email });
      // notify
      setTimeout(async () => {
        const alert = await this.alertController.create({
          header: 'Message sent',
          message: 'Thank you for contacting us!',
          buttons: ['OK']
        });
        await alert.present();
      }, 2000);
    };
    // send
    if (!this.lockdown) {
      const alert = await this.alertController.create({
        header: 'Send message?',
        message: this.contactFormGroup.get('message').value,
        buttons: [
          'Cancel',
          {
            text: 'Send',
            handler,
          },
        ],
      });
      await alert.present();
    }
  }

}
