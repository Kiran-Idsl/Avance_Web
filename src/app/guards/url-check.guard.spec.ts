import { TestBed } from '@angular/core/testing';

import { UrlCheckGuard } from './url-check.guard';

describe('UrlCheckGuard', () => {
  let guard: UrlCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UrlCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
