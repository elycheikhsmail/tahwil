import { Component, OnInit, Output } from '@angular/core';
import { MessageDeleteComponent } from './message-delete/message-delete.component';
import { IMessageInDB } from './entities/messages.entities';
import { messageData1 } from './entities/messages.data';
import { MessageService } from '../services/message.service';
import { ModalController } from '@ionic/angular';

import {  searsh1FormOptions } from './entities/messageSearshsForm.options' 
 
import { FormGroup, FormBuilder } from '@angular/forms';
import { IDate } from '../entities/date.entities';
import { MessageUpdateComponent } from './message-update/message-update.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageDeleteAllComponent } from './message-delete-all/message-delete-all.component';
import { IMessaeSearchModes } from './entities/message-search.modes';
 

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit { 
  //IMessaeSearchModes
  modes:IMessaeSearchModes = {add:false,seachByDate:true,searchByMobile:false,searchByAmount:false}
  is_irsal: boolean = true; 

  
  searsh1Form: FormGroup;
  searsh2Form: FormGroup;
  searsh3Form: FormGroup;

   

  constructor(
    private fb: FormBuilder,
    public modalCtr: ModalController,
    public messageService : MessageService,
    private _authService:AuthService,
    private _router:Router
  ) {}

  
  async ngOnInit() {
    //await this.checkUser()
    this.searsh1Form = this.fb.group( searsh1FormOptions ) 
    this.messageService.searshOneDefault()
  }



  
  async checkUser(){
    let isAuthenticateUser = false
    isAuthenticateUser = await this._authService.isAlreadyHaveToken()
    if(!isAuthenticateUser){
      this._router.navigate(["login"])
    }
  } 

  activateMode(mode:string){
    // desactivate all modes
    this.modes.add = false
    this.modes.seachByDate = false
    this.modes.searchByMobile = false
    this.modes.searchByAmount = false
    // activate specific mode
    this.modes[mode] = true

  }
 
   
  toAddMode(){
    this.messageService.getListByCritiriaOne( this.messageService.lastSearshOneParams )
    this.activateMode('add') 
  }
  
  toSearchMode(){
    this.messageService.getListByCritiriaOne( this.messageService.lastSearshOneParams )
    this.activateMode('seachByDate') 
  }
 
  async delete(itemInDb:IMessageInDB){
    const params = { component: MessageDeleteComponent, componentProps:{ itemInDb  }}
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }

  async deleteAll(){
    const params = { component: MessageDeleteAllComponent}
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }

  
  async update(itemInDb:IMessageInDB){
    const params = { component: MessageUpdateComponent, componentProps:{ itemInDb  }}
    const modal = await this.modalCtr.create( params ) 
    return await modal.present()
  }

  dateHelper(d:IDate){
    const params = { day: d.day,  month: d.month, year:d.year }
    //this.caisseForm.reset(params)  
  }

  setDate(){
    const dn = Date.now()
    const dd = new Date(dn)
    const d:IDate = { day:dd.getDate(), month:dd.getMonth()+1, year:2020 }
    this.dateHelper(d)
  }

}
