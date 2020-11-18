import { TestBed } from '@angular/core/testing';

import { AuthguardteacherService } from './authguardteacher.service';

describe('AuthguardteacherService', () => {
  let service: AuthguardteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
