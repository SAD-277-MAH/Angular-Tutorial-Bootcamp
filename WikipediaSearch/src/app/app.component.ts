import { Component } from '@angular/core';
import { Page, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: Page[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onSearch(query: string) {
    this.wikipedia.search(query).subscribe((response: Page[]) => {
      this.pages = response;
      console.log(response);
    });
  }
}
