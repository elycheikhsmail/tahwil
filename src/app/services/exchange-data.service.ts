import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { CaisseService } from '../caisse/services/caisse.service';
import { AutruiService } from '../autrui/services/autrui.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {

  constructor(
    private messageService:MessageService,
    private caisseService:CaisseService,
    private autruiService:AutruiService
  ) { }

  async getAllDataAsObject(){
    //const messages = this.messageService.getList()
    //const caisseExchages = this.caisseService.getList()
  }

}
