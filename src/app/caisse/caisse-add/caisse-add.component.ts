import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { caisseFormOptions  } from '../entities/caisseForm.options';
import { days_per_month } from '../../entities/days.data'
import { CaisseService } from 'src/app/caisse/services/caisse.service';
import { IDate } from 'src/app/entities/date.entities';
import { CaisseSearshService } from '../services/caisse-searsh.service';


@Component({
  selector: 'app-caisse-add',
  templateUrl: './caisse-add.component.html',
  styleUrls: ['./caisse-add.component.css'],
})
export class CaisseAddComponent implements OnInit {
  
  @Output() eventCaisseAdd = new EventEmitter()
  @Output() eventCaisseNotAdded = new EventEmitter()

  caisseForm: FormGroup; dateForma = "DD/MM/YYYY" 
 
  
  isFormReady = true

  constructor(
    private fb: FormBuilder,
    private itemService:CaisseService,
    private caisseSearshService : CaisseSearshService
   
  ) { }

  async ngOnInit() {
    this.caisseForm = this.fb.group( caisseFormOptions )
    await this.setDate()
    let params = this.caisseSearshService.getDate()
    this.caisseForm.patchValue( params )
  } 

  async setDate(){ 
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
       
      let params = await this.caisseSearshService.getParamsWithNO()
      console.log("searsh params",params)
      this.caisseForm.patchValue( params ) 
      //this.caisseForm.patchValue( params )
      this.caisseForm.reset()
      this.setDate()
      //debugger;
      this.isFormReady = true
      await this.itemService.getExchangeByMonthAndYear(this.caisseForm.value)  
    } else {
      console.log(" invalid form")
      this.isFormReady = false
    }
  }

}
