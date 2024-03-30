import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { notAuthenticatedUserGuard } from './not-authenticated-user.guard';

describe('notAuthenticatedUserGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notAuthenticatedUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
