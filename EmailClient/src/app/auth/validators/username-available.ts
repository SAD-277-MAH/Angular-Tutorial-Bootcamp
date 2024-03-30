import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UsernameAvailable implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.usernameAvailable(value).pipe(
      map(() => null),
      catchError((err) => {
        if (err.status && err.status === 422) {
          return of({ usernameNotAvailable: true });
        } else {
          return of({ unhandledException: true });
        }
      })
    );
  };
}
