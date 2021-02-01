import { WordpressService } from './../services/wordpress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(private wp: WordpressService) {}
  posts: any;
  ngOnInit(): void {
    this.loadBlogPosts();
  }
  async loadBlogPosts() {
    this.wp.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(res);
    });
  }
}
