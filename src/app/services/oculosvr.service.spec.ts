import { TestBed } from '@angular/core/testing';

import { OculosvrService } from './oculosvr.service';

describe('OculosvrService', () => {
  let service: OculosvrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OculosvrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
