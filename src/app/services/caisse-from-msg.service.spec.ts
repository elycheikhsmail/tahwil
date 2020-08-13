import { TestBed } from '@angular/core/testing';

import { CaisseFromMsgService } from './caisse-from-msg.service';

describe('CaisseFromMsgService', () => {
  let service: CaisseFromMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaisseFromMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
