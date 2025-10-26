import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css'],
    standalone: false
})
export class ItemListComponent {
  @Input() items: Array<any> = [];
}
