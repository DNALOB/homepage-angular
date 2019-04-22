import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category, Post } from '@sheetbase/models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() categories: Category[];
  @Input() posts: Post[];
  @Output() view: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  postsByCategory(category: Category) {
    const posts = [];
    for (let i = 0; i < (this.posts || []).length; i++) {
      const post = this.posts[i];
      if (!!post.categories && !!post.categories[category.$key]) {
        posts.push(post);
      }
    }
    return posts;
  }

}
