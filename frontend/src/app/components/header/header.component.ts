import { Component, OnInit } from '@angular/core';

import { Link, AppService, NavService, retryInterval } from '@sheetbase/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Link[];
  socials: Link[];

  constructor(
    public appService: AppService,
    public nav: NavService,
  ) {

    // socials
    this.socials = [];

    // menu links
    this.links = [
      {
        text: 'Docs',
        href: '/docs',
        handler: () => this.nav.navigate(['/docs']),
      },
      {
        text: 'Themes',
        href: '/themes',
        handler: () => this.nav.navigate(['/themes']),
      },
      {
        text: 'Blog',
        href: 'https://medium.com/@sheetbase',
        target: '_blank',
      },
      {
        text: 'Contact',
        href: '/contact',
        handler: () => this.nav.navigate(['/contact']),
      },
    ];
  }

  ngOnInit() {
    retryInterval(() => !!this.appService.options).subscribe(() => {
      const { email, facebook, twitter, github } = this.appService.options;
      this.socials = [
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/email.svg',
          class: 'email',
          href: 'mailto:' + email,
        },
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/facebook.svg',
          class: 'facebook',
          href: facebook,
        },
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/twitter.svg',
          class: 'twitter',
          href: twitter,
        },
        {
          icon: 'https://unpkg.com/@mdi/svg@latest/svg/github-circle.svg',
          class: 'github',
          href: github,
        },
      ];
    });
  }

}
