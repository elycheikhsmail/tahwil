import { TestBed } from '@angular/core/testing';

import { CaisseSearshService } from './caisse-searsh.service';

describe('CaisseSearshService', () => {
  let service: CaisseSearshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaisseSearshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
