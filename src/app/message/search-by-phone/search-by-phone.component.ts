import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { days_per_month } from 'src/app/entities/days.data';
import { MessageService } from 'src/app/services/message.service';
import { searchByPhoneFormOptions} from '../entities/messageSearshsForm.options';

@Component({
  selector: 'app-search-by-phone',
  templateUrl: './search-by-phone.component.html',
  styleUrls: ['./search-by-phone.component.scss'],
})
export class SearchByPhoneComponent implements OnInit { 

  searchByPhoneForm: FormGroup
  isFormReady: boolean = true
  dateForma = "DD/MM/YYYY" 
   

  constructor(
    private fb: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.searchByPhoneForm = this.fb.group(searchByPhoneFormOptions)
    this.searchByPhoneForm.patchValue(this.messageService.lastSearshOneParams)
     
  }


  searsh() {
    if (this.searchByPhoneForm.valid) {
      this.isFormReady = true
      console.log(" this.searchByPhoneForm.value : ",this.searchByPhoneForm.value)
      this.messageService.lastSearshOneHelper(this.searchByPhoneForm.value)
      this.messageService.getListByPhoneAndDate(this.searchByPhoneForm.value)

    } else {
      this.isFormReady = false
      console.log("form invalid")
    }
    //
  }

}
