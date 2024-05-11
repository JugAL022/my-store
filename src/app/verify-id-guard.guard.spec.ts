import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verifyIdGuardGuard } from './product/verify-id-guard.guard';

describe('verifyIdGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verifyIdGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
