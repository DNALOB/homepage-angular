import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { Category, Post } from '@sheetbase/models';
import { AppService, NavService, DataService, retryInterval } from '@sheetbase/angular';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  @ViewChild('docsContent') docsContent: IonContent;
  @ViewChild('detailSection') detailSection: ElementRef;

  private postKey: string;

  categories: Category[];
  posts: Post[];

  selectedPost: Post;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public location: Location,
    public appService: AppService,
    public nav: NavService,
  ) { }

  ngOnInit() {
    // load data
    this.loadDocs();
    // scroll to the content
    retryInterval(() => (
      !!this.selectedPost &&
      !!this.docsContent &&
      !!this.detailSection
    )).subscribe(() => {
      return this.nav.scrollTo(
        this.docsContent,
        this.detailSection.nativeElement,
      );
    });
  }

  loadDocs() {
    // get key
    this.postKey = this.route.snapshot.paramMap.get('postKey');
    // categories
    this.dataService.categories({ only: 'posts' }).subscribe(categories => {
      this.categories = categories;
    });
    // posts
    this.dataService.posts({ type: 'docs' }).subscribe(posts => {
      this.posts = posts;
      if (!!posts) {
        this.postsLoaded();
      }
    });
  }

  postsLoaded() {
    let selectedPost: Post;
    // load by post key
    if (!!this.postKey) {
      for (let i = 0; i < this.posts.length; i++) {
        const post = this.posts[i];
        if (post.$key === this.postKey) {
          selectedPost = post;
          break;
        }
      }
    }
    // default post
    if (!selectedPost) {
      this.selectedPost = this.posts[0];
      // set meta
      this.nav.setMeta({ title: 'Docs', description: 'Sheetbase documentation.' });
    } else {
      this.selectedPost = selectedPost;
      // set meta
      this.nav.setMeta(this.selectedPost);
    }
  }

  view(post: Post) {
    this.selectedPost = post;
    this.location.replaceState('/doc/' + post.$key);
  }

}
