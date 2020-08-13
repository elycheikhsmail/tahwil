import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { ICaisseExchangeInDB, ICaisseExchangeSearsh } from 'src/app/caisse/entities/caisse-exchange.entities';
import { AutruiService } from '../services/autrui.service';
 
@Component({
  selector: 'app-autrui-delete',
  templateUrl: './autrui-delete.component.html',
  styleUrls: ['./autrui-delete.component.scss'],
})
export class AutruiDeleteComponent implements OnInit {


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
    const params:ICaisseExchangeSearsh = {
      day:this.itemInDb.day,
      month:this.itemInDb.month,
      year:this.itemInDb.year,
      no:this.itemInDb.no,
      datetime:""
       
    }
    await this.itemService.delete( this.itemInDb.id)
    await this.itemService.getExchange(params)
     
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
