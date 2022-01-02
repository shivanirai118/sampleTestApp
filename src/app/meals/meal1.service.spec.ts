import { TestBed } from '@angular/core/testing';

import { Meal1Service } from './meal1.service';

describe('Meal1Service', () => {
  let service: Meal1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Meal1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
