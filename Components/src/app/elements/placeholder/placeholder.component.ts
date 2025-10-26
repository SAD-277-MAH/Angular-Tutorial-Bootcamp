import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.css'],
    standalone: false
})
export class PlaceholderComponent {
  @Input() header: boolean = true;
  @Input() lines: number = 3;
}
