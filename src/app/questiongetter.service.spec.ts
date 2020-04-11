import { TestBed } from '@angular/core/testing';

import { QuestiongetterService } from './questiongetter.service';

describe('QuestiongetterService', () => {
  let service: QuestiongetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestiongetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
