import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { ICaisseTable } from '../../entities/caisse.entities';
import { data } from '../entities/caisee-exchane.data'
import { ICaisseExchangeInDB } from '../entities/caisse-exchange.entities';
import { CaisseService } from 'src/app/caisse/services/caisse.service';
import { ModalController } from '@ionic/angular';
import { CaisseDetailsComponent } from '../caisse-details/caisse-details.component';
import { CaisseUpdateComponent } from '../caisse-update/caisse-update.component';
import { CaisseDeleteComponent } from '../caisse-delete/caisse-delete.component';
import { IDate } from 'src/app/entities/date.entities';
import { CaisseSearshService } from '../services/caisse-searsh.service';
import { CaisseDeleteAllComponent } from '../caisse-delete-all/caisse-delete-all.component';
import { IModes } from '../entities/caisse-search.modes';

@Component({
  selector: 'app-caisse-list',
  templateUrl: './caisse-list.component.html',
  styleUrls: ['./caisse-list.component.css']
})
export class CaisseListComponent implements OnInit {
  modesEnable: IModes = { add: false, searchByDay: false, searchByMonth: true }
  
  dateParams: IDate
  isFormReady = false
  constructor(
    public modalCtr: ModalController,
    public itemService: CaisseService,
    private caisseSearshService: CaisseSearshService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.getDate()
    await this.itemService.getExchangeByMonthAndYear(this.dateParams)
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


  getDate() {
    this.dateParams = this.caisseSearshService.getDate()
  }

  gotoCaisse() {
    this.router.navigate(["caisse"])
  }


  async delete(itemInDb: ICaisseExchangeInDB) {
    const params = { component: CaisseDeleteComponent, componentProps: { itemInDb } }
    const modal = await this.modalCtr.create(params)
    return await modal.present()
  }

  async deleteAll() {
    const params = { component: CaisseDeleteAllComponent }
    const modal = await this.modalCtr.create(params)
    return await modal.present()
  }


  async update(itemInDb: ICaisseExchangeInDB) {
    const params = { component: CaisseUpdateComponent, componentProps: { itemInDb } }
    const modal = await this.modalCtr.create(params)
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
