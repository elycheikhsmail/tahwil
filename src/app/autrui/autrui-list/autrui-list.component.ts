import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
   
import { ModalController } from '@ionic/angular'; 
import { IDate } from 'src/app/entities/date.entities'; 
import { CaisseSearshService } from 'src/app/caisse/services/caisse-searsh.service';
import { ICaisseExchangeInDB } from 'src/app/caisse/entities/caisse-exchange.entities';
import { AutruiDeleteComponent } from '../autrui-delete/autrui-delete.component';
import { AutruiUpdateComponent } from '../autrui-update/autrui-update.component';
import { AutruiService } from '../services/autrui.service';
import { AutruiDeleteAllComponent } from '../autrui-delete-all/autrui-delete-all.component';
import { IModes } from 'src/app/caisse/entities/caisse-search.modes';


@Component({
  selector: 'app-autrui-list',
  templateUrl: './autrui-list.component.html',
  styleUrls: ['./autrui-list.component.scss'],
})
export class AutruiListComponent implements OnInit {
  modesEnable: IModes = { add: false, searchByDay: false, searchByMonth: true }
  
  isAddMode:boolean=false
  
  dateParams: IDate

  isFormReady = false
  constructor(
    public modalCtr: ModalController,
    public itemService:AutruiService,
    private caisseSearshService : CaisseSearshService ,
    private router:Router,
  ) { }

 async  ngOnInit() { 
  this.dateParams = this.caisseSearshService.getDate()  
  await this.itemService.getExchange( this.dateParams ) 
  }  

  

  activateMode(mode: string) {
    // desactive all mode
    this.modesEnable.add = false
    this.modesEnable.searchByDay = false
    this.modesEnable.searchByMonth = false
    // the active specific mode
    this.modesEnable[mode] = true
    console.log(this.modesEnable)
  }

  gotoCaisse(){
    this.router.navigate(["autrui"])
  }


  async delete(itemInDb:ICaisseExchangeInDB){
    const params = { component: AutruiDeleteComponent, componentProps:{ itemInDb  }}
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }

  async deleteAll(){
    const params = { component: AutruiDeleteAllComponent }
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }
  
  async update(itemInDb:ICaisseExchangeInDB){
    const params = { component: AutruiUpdateComponent, componentProps:{ itemInDb  }}
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }

   
  
  async searchByDay(event: IDate) {
    console.log("event caisse searsh : ", event)
    this.caisseSearshService.addParams(event)
    this.itemService.getExchange(event)

  }

  async searchByMonth(event: IDate) {
    console.log("event caisse searsh : ", event)
    this.caisseSearshService.addParams(event)
    this.itemService.getExchangeByMonthAndYear(event)

  }




}
