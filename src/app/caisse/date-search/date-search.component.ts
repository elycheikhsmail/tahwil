import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IDate } from '../../entities/date.entities';
import { ICaisse } from '../../caisse/entities/caisse.entities';
import { days_per_month } from '../../entities/days.data';
import { MessageService } from '../../services/message.service';
import { CaisseService } from '../../caisse/services/caisse.service';
import { CaisseSearshService } from '../../caisse/services/caisse-searsh.service';
import { caisseSearshFormOptions } from '../../caisse/entities/caisseForm.options';
 

@Component({
  selector: 'app-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.scss'],
})
export class DateSearchComponent implements OnInit {

  @Input() params:IDate
  @Output() eventSearsh = new EventEmitter()
 

  caisseSearshForm: FormGroup; 
  dateForma = "DD/MM/YYYY" ;
  isFormReady=true
  caisse : ICaisse ; 

  constructor(
    public messageService:MessageService,
    public caisseService : CaisseService,
    public caisseSearshService:CaisseSearshService,
    private fb:FormBuilder,  
  ) { }

 async ngOnInit() {  
    this.caisseSearshForm = this.fb.group( caisseSearshFormOptions )
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
    let day = d.getDate(); this.caisseSearshForm.get('day').patchValue(day)
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

 

