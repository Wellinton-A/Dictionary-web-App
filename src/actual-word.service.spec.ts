import { TestBed } from '@angular/core/testing';

import { ActualWordService } from './actual-word.service';

describe('ActualWordService', () => {
  let service: ActualWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
