import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { emailResolver } from './email.resolver';

describe('emailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => emailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
