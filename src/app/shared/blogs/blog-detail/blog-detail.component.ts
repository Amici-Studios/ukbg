import { WordpressService } from './../../services/wordpress.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  constructor(private wp: WordpressService, private route: ActivatedRoute) {}
  post: any;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.wp.getPostDetail(id).subscribe((res) => {
      this.post = res;
      console.log(res);
    });
  }
}
