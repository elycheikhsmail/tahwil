import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be one message in db', () => {
    service.deleteAll();
    let msg = {
      id:1,
      destination:"nktt",
      tel:2233445566,
      montant:10000,
      day:1,
      month:1,
      year:2020,
      lemien:10,
      lesien:10,
      no:"irsal"
    }
    service.add(msg).then(
      ()=>service.getList()
    )
     
    expect(service.items.length).toBe(1);
  });
});
