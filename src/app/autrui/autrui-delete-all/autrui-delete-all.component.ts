import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { ICaisseExchangeInDB, ICaisseExchangeSearsh } from 'src/app/caisse/entities/caisse-exchange.entities';
import { AutruiService } from '../services/autrui.service';
 
@Component({
  selector: 'app-autrui-delete-all',
  templateUrl: './autrui-delete-all.component.html',
  styleUrls: ['./autrui-delete-all.component.scss'],
})
export class AutruiDeleteAllComponent implements OnInit {
 

  @Input() itemInDb : ICaisseExchangeInDB
  constructor(
    public modalCtr: ModalController,
    public itemService:AutruiService,
  ) { }

  ngOnInit() { 
  }
  
  dismiss(){
    const params = { 'dismissed':true, }
    this.modalCtr.dismiss(params)
  }
 
 async  yes(){ 
    await this.itemService.deleteAll()
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
