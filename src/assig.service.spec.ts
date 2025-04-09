import { TestBed } from '@angular/core/testing';

import { AssigService } from './assig.service';

describe('AssigService', () => {
  let service: AssigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
