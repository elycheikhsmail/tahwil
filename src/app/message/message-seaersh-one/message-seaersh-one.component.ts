import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { searsh1FormOptions } from 'src/app/message/entities/messageSearshsForm.options';
import { IDate } from 'src/app/entities/date.entities';
import { MessageService, IMessageSearshOne } from 'src/app/services/message.service';
 
@Component({
  selector: 'app-message-seaersh-one',
  templateUrl: './message-seaersh-one.component.html',
  styleUrls: ['./message-seaersh-one.component.scss'],
})
export class MessageSeaershOneComponent implements OnInit {

  searsh1Form: FormGroup
  isFormReady: boolean = true
  dateForma = "DD/MM/YYYY" 
   

  constructor(
    private fb: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.searsh1Form = this.fb.group(searsh1FormOptions)
    this.searsh1Form.setValue(this.messageService.lastSearshOneParams)  
  }

   
 
  searsh() {
    if (this.searsh1Form.valid) {
      this.isFormReady = true
      let s:IMessageSearshOne = this.searsh1Form.value
      console.log("this.searsh1Form.value : ",s)
      this.messageService.lastSearshOneHelper(s)
      this.messageService.getListByCritiriaOne(s)

    } else {
      this.isFormReady = false
      console.log("form invalid")
    }
    //
  }

}
