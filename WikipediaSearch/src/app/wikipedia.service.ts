import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface WikipediaResponse {
  query: {
    search: Page[];
  };
}

export interface Page {
  title: string;
  snippet: string;
  wordcount: number;
  pageid: number;
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  search(query: string): Observable<Page[]> {
    return this.httpClient
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          srsearch: query,
          utf8: '',
          format: 'json',
          origin: '*',
        },
      })
      .pipe(
        map((value) => value.query),
        map((value) => value.search)
      );
  }
}
