import { WordpressService } from './../../../shared/services/wordpress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grieving',
  templateUrl: './grieving.component.html',
  styleUrls: ['./grieving.component.scss'],
})
export class GrievingComponent implements OnInit {
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
