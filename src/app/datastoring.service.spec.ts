import { TestBed } from '@angular/core/testing';

import { DatastoringService } from './datastoring.service';

describe('DatastoringService', () => {
  let service: DatastoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
