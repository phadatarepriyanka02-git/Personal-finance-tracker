import { TestBed } from '@angular/core/testing';

import { TrnsactionService } from './trnsaction.service';

describe('TrnsactionService', () => {
  let service: TrnsactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrnsactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
