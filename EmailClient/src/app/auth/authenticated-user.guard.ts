import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authenticatedUserGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedin$.pipe(
    skipWhile((value) => value === null),
    map((value) => value!),
    map((value) => !value),
    take(1),
    tap((value) => {
      if (!value) {
        router.navigateByUrl('/inbox');
      }
    })
  );
};
