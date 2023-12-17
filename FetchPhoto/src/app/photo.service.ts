import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PhotoResponse {
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  accessKey: string = 'MOMwkU31HIUTwtFqM1GxJTuBDJJ_SbQO3bVwUg6TVBM';

  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<PhotoResponse> {
    return this.httpClient.get<PhotoResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`,
        },
      }
    );
  }
}
