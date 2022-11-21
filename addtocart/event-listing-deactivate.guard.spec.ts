import { TestBed } from '@angular/core/testing';

import { EventListingDeactivateGuard } from './event-listing-deactivate.guard';

describe('EventListingDeactivateGuard', () => {
  let guard: EventListingDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventListingDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
