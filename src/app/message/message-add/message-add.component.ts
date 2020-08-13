import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

 
import { messageFormOptions } from '../entities/messageForm.options'
import { MessageService } from '../../services/message.service';
import { IDate } from 'src/app/entities/date.entities';
import { IMessageInDB  } from '../entities/messages.entities';


@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css']
})
export class MessageAddComponent implements OnInit {
  @Output() eventMessageAdded = new EventEmitter()
  // @Output() eventHide = new EventEmitter()

  dateForma = "DD/MM/YYYY" 
  messageForm: FormGroup
  is_form_ready = true
  is_Loading: boolean = true

  constructor(
    private fb: FormBuilder,
    public crudMessageService: MessageService,

  ) { }

  ngOnInit() {
    this.messageForm = this.fb.group(messageFormOptions)
    this.initDate()
    //this.crudMessageService.lastSearshOneParams 
  }

  initDate(){
    const d = new Date()
    const date = d.toISOString()
    this.messageForm.get('datetime').patchValue(date)
  }


  switch_is_irsal() {

  }

  async setDateExtraField() {
    let n: string, d: Date;
    n = this.messageForm.get('datetime').value; d = new Date(n); console.log(d)
    let day = d.getDate(); this.messageForm.get('day').patchValue(day)
    let month = d.getMonth() + 1; this.messageForm.get('month').patchValue(month)
    let year = d.getFullYear(); this.messageForm.get('year').patchValue(year)

  }

  public async postData() {
    if (this.messageForm.valid) {
      await this.setDateExtraField()
      this.is_form_ready = true
      console.log(this.messageForm.value)
      await this.crudMessageService.add(this.messageForm.value)
      await this.crudMessageService.getListByCritiriaOne(
        this.crudMessageService.lastSearshOneParams)
      this.messageForm.reset()
      this.messageForm.patchValue(this.crudMessageService.lastSearshOneParams)
      console.log(" message searsh params ")
      console.log(this.crudMessageService.lastSearshOneParams)
      //this.hide()
    } else {
      this.is_form_ready = false
    }

  }


/*
  dateHelper(d: IDate) {
    const params = { day: d.day, month: d.month, year: d.year }
    //this.caisseForm.reset(params)  
  }
  setDate() {
    const dn = Date.now()
    const dd = new Date(dn)
    const d: IDate = { day: dd.getDate(), month: dd.getMonth() + 1, year: 2020 }
    this.dateHelper(d)
  }
  */





}

 