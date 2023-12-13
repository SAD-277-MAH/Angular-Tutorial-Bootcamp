import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  query = '';

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.search.emit(this.query);
  }
}
