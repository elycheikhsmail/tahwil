import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { IMessageInDB } from '../entities/messages.entities';

@Component({
  selector: 'app-message-delete',
  templateUrl: './message-delete.component.html',
  styleUrls: ['./message-delete.component.scss'],
})
export class MessageDeleteComponent implements OnInit {

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
  reduceDateFeilds( ) {
    const d = new Date(this.itemInDb.year, this.itemInDb.month - 1, this.itemInDb.day)
    console.log(d)
    const date = d.toISOString();
    console.log(date)
    return date
  }


  yes(){
    let date = this.reduceDateFeilds()
    const params = {
      datetime:date,
      no:this.itemInDb.no
    }
    this.itemService.delete(this.itemInDb.id)
    this.itemService.getListByCritiriaOne( params )
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
