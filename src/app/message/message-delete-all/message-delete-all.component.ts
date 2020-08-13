import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { IMessageInDB } from '../entities/messages.entities';

@Component({
  selector: 'app-message-delete-all',
  templateUrl: './message-delete-all.component.html',
  styleUrls: ['./message-delete-all.component.scss'],
})
export class MessageDeleteAllComponent implements OnInit {

  @Input() itemInDb : IMessageInDB
  constructor(
    public modalCtr: ModalController,
    public itemService:MessageService,
  ) { }

  ngOnInit() { 
  }
  
  dismiss(){
    const params = { 'dismissed':true, }
    this.modalCtr.dismiss(params)
  }

  async show(){
    console.log(this.itemInDb.id)
  }
  async yes(){ 
    await this.itemService.deleteAll()
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
