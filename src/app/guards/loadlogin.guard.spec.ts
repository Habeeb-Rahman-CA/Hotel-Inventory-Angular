import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loadloginGuard } from './loadlogin.guard';

describe('loadloginGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadloginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
