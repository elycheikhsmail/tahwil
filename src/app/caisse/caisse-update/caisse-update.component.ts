import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { caisseFormOptions } from '../entities/caisseForm.options';
import { days_per_month } from '../../entities/days.data'
import { CaisseService } from 'src/app/caisse/services/caisse.service';
import { ICaisseExchangeInDB, ICaisseExchangeSearsh } from 'src/app/caisse/entities/caisse-exchange.entities';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-caisse-update',
  templateUrl: './caisse-update.component.html',
  styleUrls: ['./caisse-update.component.scss'],
})
export class CaisseUpdateComponent implements OnInit {

  @Input() itemInDb: ICaisseExchangeInDB


  caisseForm: FormGroup; dateForma = "DD/MM/YYYY" 
  //is_devaatou_vihi:boolean = true

  days_per_month: number[] = days_per_month
  max_day_per_this_month = 31

  constructor(
    public modalCtr: ModalController,
    private fb: FormBuilder,
    public itemService: CaisseService,

  ) { }

  ngOnInit() {
    this.caisseForm = this.fb.group(caisseFormOptions)
    this.caisseForm.reset(this.itemInDb)
  }

  
  setDate(){
    const d = new Date()
    const date = d.toISOString()
    this.caisseForm.get('datetime').patchValue(date) 
  }

  
  async setDateExtraField() {
    let n: string, d: Date;
    n = this.caisseForm.get('datetime').value; d = new Date(n); console.log(d)
    let day = d.getDate(); this.caisseForm.get('day').patchValue(day)
    let month = d.getMonth() + 1; this.caisseForm.get('month').patchValue(month)
    let year = d.getFullYear(); this.caisseForm.get('year').patchValue(year)

  }


  async update() {
    if (this.caisseForm.valid) {
      await this.setDateExtraField()
      // a changer
    const params:ICaisseExchangeSearsh = {
      day:this.itemInDb.day,
      month:this.itemInDb.month,
      year:this.itemInDb.year,
      no:this.itemInDb.no,
      datetime:this.itemInDb.datetime
    }
      console.log("update valide data")
      console.log("data : ", this.caisseForm.value)
      await this.itemService.update(this.caisseForm.value)
      await this.itemService.getExchangeByMonthAndYear(params)
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
