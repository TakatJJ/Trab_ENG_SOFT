import { TestBed } from '@angular/core/testing';

import { BackAPIService } from './back-api.service';

describe('BackAPIService', () => {
  let service: BackAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
