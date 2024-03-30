import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const notAuthenticatedUserGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedin$.pipe(
    skipWhile((value) => value === null),
    map((value) => value!),
    take(1),
    tap((value) => {
      if (!value) {
        router.navigateByUrl('/');
      }
    })
  );
};
