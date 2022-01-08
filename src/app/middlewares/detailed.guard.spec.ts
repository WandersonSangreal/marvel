import { TestBed } from '@angular/core/testing';

import { DetailedGuard } from './detailed.guard';

describe('DetailedGuard', () => {
  let guard: DetailedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
