import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string = '';

  inputErrors(formControl: AbstractControl) {
    return formControl ? formControl.errors : '';
  }

  onSubmit() {
    console.log(this.email);
  }
}
