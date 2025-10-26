import { Component, Input } from '@angular/core';
import { Page } from '../wikipedia.service';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrl: './page-list.component.css',
    standalone: false
})
export class PageListComponent {
  @Input() data: Page[] = [];
}
