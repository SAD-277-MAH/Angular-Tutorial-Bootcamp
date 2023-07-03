import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() items: Array<any> = [];

  currentIndex: number = 0;

  onClick(index:number) {
    if (index === this.currentIndex) {
      this.currentIndex = -1;
    } else {
      this.currentIndex = index;
    }
  }
}
