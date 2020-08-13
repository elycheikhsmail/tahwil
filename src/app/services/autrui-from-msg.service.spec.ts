import { TestBed } from '@angular/core/testing';

import { AutruiFromMsgService } from './autrui-from-msg.service';

describe('AutruiFromMsgService', () => {
  let service: AutruiFromMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutruiFromMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
