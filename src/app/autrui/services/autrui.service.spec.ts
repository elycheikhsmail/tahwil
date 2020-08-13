import { TestBed } from '@angular/core/testing';

import { AutruiService } from './autrui.service';

describe('AutruiService', () => {
  let service: AutruiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutruiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
