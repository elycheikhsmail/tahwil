import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { ICaisseExchangeInDB, ICaisseExchangeSearsh } from 'src/app/caisse/entities/caisse-exchange.entities';
import { CaisseService } from 'src/app/caisse/services/caisse.service';

@Component({
  selector: 'app-caisse-delete',
  templateUrl: './caisse-delete.component.html',
  styleUrls: ['./caisse-delete.component.css'],
})
export class CaisseDeleteComponent implements OnInit {


  @Input() itemInDb : ICaisseExchangeInDB
  constructor(
    public modalCtr: ModalController,
    public itemService:CaisseService,
  ) { }

  ngOnInit() { 
  }
  
  dismiss(){
    const params = { 'dismissed':true, }
    this.modalCtr.dismiss(params)
  }
 
 async  yes(){
    const params:ICaisseExchangeSearsh = {
      datetime:"",
      day:this.itemInDb.day,
      month:this.itemInDb.month,
      year:this.itemInDb.year,
      no:this.itemInDb.no
       
    }
    await this.itemService.delete( this.itemInDb.id)
    await this.itemService.getExchangeByMonthAndYear(params)
     
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
