import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeneralApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Apikey ecc986dd-c42d-4a07-a378-94a6a8bad684',
    }),
  };

  URL =
    'https://charitybase.uk/api/graphql?query={ CHC { getCharities(filters: {search: "bereavement" }) { count list(limit: 30) { id names { value primary } contact { email address phone postcode } activities } } } }';

  constructor(private http: HttpClient) {}

  getCharities() {
    return this.http.get(this.URL, { headers: { Authorization: 'Apikey ecc986dd-c42d-4a07-a378-94a6a8bad684' } });
  }
}
