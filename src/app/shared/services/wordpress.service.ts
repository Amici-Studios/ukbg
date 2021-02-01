import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  constructor(private http: HttpClient) {}
  ukbgmaster = 'http://ukbereavementgroup.co.uk/wordpress/wp-json/wp/v2/';
  grieving = 'http://ukbereavementgroup.co.uk/wordpress/wp-json/wp/v2/posts';
  getPosts() {
    return this.http.get(this.ukbgmaster + 'posts?_embed');
  }

  getPostDetail(id: number): Observable<any> {
    const url = `${this.grieving}/${id}`;
    return this.http.get<any>(url);
  }
}
