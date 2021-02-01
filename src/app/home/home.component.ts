import { Component, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  value = '';

  ngOnInit(): void {}
}
