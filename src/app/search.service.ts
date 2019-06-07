import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './models/search-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  url =
    'https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=';

  searchUser(searchText: string) {
    return this.httpClient.get(this.url + searchText) as Observable<
      SearchResult
    >;
  }
}
