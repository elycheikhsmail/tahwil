import { TestBed } from '@angular/core/testing';

import { VaiidaFromMsgService } from './vaiida-from-msg.service';

describe('VaiidaFromMsgService', () => {
  let service: VaiidaFromMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaiidaFromMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
