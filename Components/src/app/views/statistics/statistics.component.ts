import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
    standalone: false
})
export class StatisticsComponent {
  @Input() data: Array<any> = [];
}
