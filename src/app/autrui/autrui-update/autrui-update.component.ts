import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 
import { days_per_month } from '../../entities/days.data' 
import { ICaisseExchangeInDB, ICaisseExchangeSearsh } from 'src/app/caisse/entities/caisse-exchange.entities';
import { ModalController } from '@ionic/angular';
import { AutruiService } from '../services/autrui.service';
import { caisseFormOptions } from 'src/app/caisse/entities/caisseForm.options';

@Component({
  selector: 'app-autrui-update',
  templateUrl: './autrui-update.component.html',
  styleUrls: ['./autrui-update.component.scss'],
})
export class AutruiUpdateComponent implements OnInit {

  @Input() itemInDb: ICaisseExchangeInDB


  caisseForm: FormGroup
  //is_devaatou_vihi:boolean = true

  days_per_month: number[] = days_per_month
  max_day_per_this_month = 31

  constructor(
    public modalCtr: ModalController,
    private fb: FormBuilder,
    public itemService: AutruiService,

  ) { }

  ngOnInit() {
    this.caisseForm = this.fb.group(caisseFormOptions)
    this.caisseForm.reset(this.itemInDb)
  }

  async update() {
    if (this.caisseForm.valid) {
      
    const params:ICaisseExchangeSearsh = {
      datetime:this.itemInDb.datetime,
      day:this.itemInDb.day,
      month:this.itemInDb.month,
      year:this.itemInDb.year,
      no:this.itemInDb.no
    }
      console.log("update valide data")
      console.log("data : ", this.caisseForm.value)
      await this.itemService.update(this.caisseForm.value)
      await this.itemService.getExchange(params)
      this.dismiss()
    }
  }

  no() {
    this.dismiss()
  }
  
  dismiss() {
    const params = { 'dismissed': true, }
    this.modalCtr.dismiss(params)
  }










}
