import { Component, OnInit, Input } from '@angular/core';

import { Post } from '@sheetbase/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {}

  repoUrl() {
    const [ categoryKey ] = Object.keys(this.post.categories);
    return `https://docs.sheetbase.dev/${ categoryKey }/${ this.post.$key }`;
  }

  mdBlobUrl() {
    return this.post.contentSource
      .replace('raw.githubusercontent.com', 'github.com')
      .replace('master', 'blob/master');
  }

}
