import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDate } from '../../entities/date.entities';
import { ICaisse } from '../../caisse/entities/caisse.entities';
import { days_per_month } from '../../entities/days.data'; 
import { CaisseSearshService } from '../../caisse/services/caisse-searsh.service';
import { SearchMonthFormOptions } from '../../caisse/entities/caisseForm.options';
import { AutruiService } from '../services/autrui.service';
 
@Component({
  selector: 'app-autrui-search-month',
  templateUrl: './autrui-search-month.component.html',
  styleUrls: ['./autrui-search-month.component.scss'],
})
export class AutruiSearchMonthComponent implements OnInit {

  @Input() params:IDate
  @Output() eventSearsh = new EventEmitter()
 

  caisseSearshForm: FormGroup;
  dateForma = "DD/MM/YYYY" ;
  isFormReady=true
   
  caisse : ICaisse ;
 

  constructor(  
    public caisseSearshService:CaisseSearshService,
    // AutruiService,
    //
    private fb:FormBuilder,  
   
  ) { }

 async ngOnInit() {  
    this.caisseSearshForm = this.fb.group( SearchMonthFormOptions )
    console.log(this.params)
    this.initDate()
    this.setDateExtraField()
    this.caisseSearshForm.patchValue( this.params )
  } 
 

  initDate(){
    const d = new Date()
    const date = d.toISOString()
    this.caisseSearshForm.get('datetime').patchValue(date)
  }

  async setDateExtraField() {
    let n: string, d: Date;
    n = this.caisseSearshForm.get('datetime').value; d = new Date(n); console.log(d)
    let month = d.getMonth() + 1; this.caisseSearshForm.get('month').patchValue(month)
    let year = d.getFullYear(); this.caisseSearshForm.get('year').patchValue(year)
  }
 
  async searsh1(){  
    if(this.caisseSearshForm.valid){
      this.isFormReady = true  
      await this.setDateExtraField()
      await this.caisseSearshService.addParamsFromAny(this.caisseSearshForm.value)
      console.log(" rapport caisse searsh params form value")
      console.log(this.caisseSearshForm.value)
      this.eventSearsh.emit(this.caisseSearshForm.value) 
    } else {
      this.isFormReady = false
    }
  }
 
   

 

}

 

