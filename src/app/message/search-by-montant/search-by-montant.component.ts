import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { days_per_month } from 'src/app/entities/days.data';
import { MessageService } from 'src/app/services/message.service';
import { searchByMontantFormOptions } from '../entities/messageSearshsForm.options';

@Component({
  selector: 'app-search-by-montant',
  templateUrl: './search-by-montant.component.html',
  styleUrls: ['./search-by-montant.component.scss'],
})
export class SearchByMontantComponent implements OnInit {
  searchByPhoneForm: FormGroup
  isFormReady: boolean = true
  dateForma = "DD/MM/YYYY" 
   
  constructor(
    private fb: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.searchByPhoneForm = this.fb.group(searchByMontantFormOptions)
    this.searchByPhoneForm.patchValue(this.messageService.lastSearshOneParams)
  }


  searsh() {
    if (this.searchByPhoneForm.valid) {
      this.isFormReady = true
      this.messageService.lastSearshOneHelper(this.searchByPhoneForm.value)
      this.messageService.getListByMontantAndDate(this.searchByPhoneForm.value)
    } else {
      this.isFormReady = false
      console.log("form invalid")
    } 
  }

}
