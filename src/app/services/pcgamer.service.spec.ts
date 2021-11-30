import { TestBed } from '@angular/core/testing';

import { PcgamerService } from './pcgamer.service';

describe('PcgamerService', () => {
  let service: PcgamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcgamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
