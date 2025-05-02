import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { libAuthGuard } from './libAuth.guard';

describe('libguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => libAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
