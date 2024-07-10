import { TestBed } from '@angular/core/testing';

import { MockResponsesService } from './mock-responses.service';

describe('MockResponsesService', () => {
  let service: MockResponsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockResponsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
