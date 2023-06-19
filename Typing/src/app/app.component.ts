import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  inputText: string = '';

  onChangeInput(text: string) {
    this.inputText = text;
  }

  compare(randomLetter: string, inputLetter: string): string {
    if (!inputLetter) {
      return 'pending';
    }
    return randomLetter === inputLetter ? 'correct' : 'incorrect';
  }
}
