import { TestBed } from '@angular/core/testing';

import { SubmitAppService } from './submit-app.service';

describe('SubmitAppService', () => {
  let service: SubmitAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
