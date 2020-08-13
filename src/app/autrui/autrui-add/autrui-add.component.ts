
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { days_per_month } from '../../entities/days.data'  
import { AutruiService } from '../services/autrui.service';
import { CaisseSearshService } from 'src/app/caisse/services/caisse-searsh.service';
import { caisseFormOptions } from 'src/app/caisse/entities/caisseForm.options'; 

@Component({
  selector: 'app-autrui-add',
  templateUrl: './autrui-add.component.html',
  styleUrls: ['./autrui-add.component.scss'],
})
export class AutruiAddComponent implements OnInit {
 
  @Output() eventCaisseAdd = new EventEmitter()
  @Output() eventCaisseNotAdded = new EventEmitter()

  caisseForm: FormGroup ; dateForma = "DD/MM/YYYY" 

  days_per_month: number[] = days_per_month
  max_day_per_this_month = 31
  
  isFormReady = true

  constructor(
    private fb: FormBuilder,
    private itemService:AutruiService,
    private caisseSearshService : CaisseSearshService
   
  ) { }

  async ngOnInit() {
    this.caisseForm = this.fb.group( caisseFormOptions ) 
    this.setDate()
    let params = this.caisseSearshService.getDate()
    this.caisseForm.patchValue( params )
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


  async add(){ 
    if( this.caisseForm.valid ){ 
      await this.setDateExtraField()
      await this.itemService.add(this.caisseForm.value) 
      await this.caisseSearshService.addParamsFromAny(this.caisseForm.value)
      this.caisseForm.reset()
      this.setDate()
      let params = await this.caisseSearshService.getParamsWithNO()
      console.log("searsh params",params)
      this.caisseForm.patchValue( params ) 
      this.isFormReady = true
      await this.itemService.getExchangeByMonthAndYear(this.caisseForm.value)  
    } else {
      console.log(" invalid form")
      this.isFormReady = false
    }
  }

}
