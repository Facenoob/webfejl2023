import { TestBed } from '@angular/core/testing';

import { KeresServiceService } from './keres-service.service';

describe('KeresServiceService', () => {
  let service: KeresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
