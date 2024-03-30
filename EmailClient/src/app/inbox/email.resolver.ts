import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EmailService, GetEmailResult } from './email.service';
import { EMPTY, catchError } from 'rxjs';

export const emailResolver: ResolveFn<GetEmailResult> = (route, state) => {
  const emailService = inject(EmailService);
  const router = inject(Router);

  const { id } = route.params;

  return emailService.getEmail(id).pipe(
    catchError((error) => {
      router.navigateByUrl('/inbox/not-found');

      return EMPTY;
    })
  );
};
