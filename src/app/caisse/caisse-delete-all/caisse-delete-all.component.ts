import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';  
import { CaisseService } from 'src/app/caisse/services/caisse.service';

@Component({
  selector: 'app-caisse-delete-all',
  templateUrl: './caisse-delete-all.component.html',
  styleUrls: ['./caisse-delete-all.component.scss'],
})
export class CaisseDeleteAllComponent implements OnInit {
 
  constructor(
    public modalCtr: ModalController,
    public itemService:CaisseService,
  ) { }

  ngOnInit() { 
  }
  
  dismiss(){
    const params = { 'dismissed':true, }
    this.modalCtr.dismiss(params)
  }
 
 async  yes(){ 
    await this.itemService.deleteAll() 
    this.dismiss()
  }
  no(){
    this.dismiss()
  }


}
