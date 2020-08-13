
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 

import { days_per_month } from '../../entities//days.data'

import { messageFormOptions } from '../entities/messageForm.options'


import {  MessageService  } from '../../services/message.service';
import { IDate } from 'src/app/entities/date.entities';
import { ModalController } from '@ionic/angular';
import { IMessageInDB } from 'src/app/message/entities/messages.entities';

@Component({
  selector: 'app-message-update',
  templateUrl: './message-update.component.html',
  styleUrls: ['./message-update.component.scss'],
})
export class MessageUpdateComponent implements OnInit {
  @Output() eventMessageAdded = new EventEmitter()
  @Output() eventHide = new EventEmitter()
  @Input() itemInDb : IMessageInDB

  messageForm: FormGroup  
  is_form_ready = true
  is_Loading: boolean = true 
 
  
  days_per_month: number[] = days_per_month
  max_day_per_this_month = 31

  constructor(
    public modalCtr: ModalController,
    private fb: FormBuilder,
    //public crudMessageService:MessageService,
    public itemService:MessageService,
   
  ) { }

  ngOnInit() { 
    this.messageForm = this.fb.group(messageFormOptions)
    this.messageForm.patchValue( this.itemInDb )
    this.reduceFeilds()

    this.messageForm.get("datetime").valueChanges.subscribe(v =>{
      console.log(v);
      const date = new Date(v);
      this.messageForm.get('day').patchValue(date.getDate());
      this.messageForm.get('month').patchValue(date.getMonth()+1);
      this.messageForm.get('year').patchValue(date.getFullYear());
      console.log(this.messageForm.value);

    });

  }

  reduceFeilds():void{
    const date = new Date(this.itemInDb.year,this.itemInDb.month - 1,this.itemInDb.day).toISOString();
    this.messageForm.get('datetime').patchValue(date) 
   
  }
  reduceDateFeilds():string{
    const date = new Date(this.itemInDb.year,this.itemInDb.month - 1,this.itemInDb.day).toISOString();
    return date
  }
 
 
  switch_is_irsal() {  

  }

  hide() {  this.eventHide.emit() }

 public async  postData() {
    console.log(this.messageForm.value)
    if (this.messageForm.valid) {
      this.is_form_ready = true
      await this.itemService.update(this.messageForm.value) // IMessageInDB
      let d = this.reduceDateFeilds()
      const params = { 
        datetime:d,
      no:this.itemInDb.no
    } 
    this.itemService.getListByCritiriaOne( params )
    this.dismiss()
       } else {
      this.is_form_ready = false
    }
  }

   
  
  dismiss(){
    const params = { 'dismissed':true, }
    this.modalCtr.dismiss(params)
  }

  async show(){
    console.log(this.itemInDb.id)
  }
  yes(){
  }
  no(){
    this.dismiss()
  }






}
 

