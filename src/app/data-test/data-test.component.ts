import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { CaisseService } from '../caisse/services/caisse.service';
import { AutruiService } from '../autrui/services/autrui.service';
import { messagesFirstDay, messagesSecondtDay, messagesThirdtDay } from './data/message-test-data'
import { caisseFirstDay, caisseSecondDay } from './data/caisse-test-data';
import { autruiFirstDay, autruiSecondDay } from './data/autrui-test-data';


@Component({
  selector: 'app-data-test',
  templateUrl: './data-test.component.html',
  styleUrls: ['./data-test.component.scss'],
})
export class DataTestComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private caisseService:CaisseService,
    private autruiService:AutruiService,
    private route : Router
  ) { }

  ngOnInit(
  ) {}
 

  async initData(){
    // add messages for first day
    messagesFirstDay.forEach(
      v => {
        this.messageService.add(v)
        console.log("add message : ", v)
      }
    )

    messagesSecondtDay.forEach(
      v => {
        this.messageService.add(v)
        console.log("add message : ", v)
      }
    )

    messagesThirdtDay.forEach(
      v => {
        this.messageService.add(v)
        console.log("add message : ", v)
      }
    )

    // add caisse exchange for forst day
    await this.caisseService.add(caisseFirstDay)
    await this.caisseService.add(caisseSecondDay)
    console.log("caisse exchange for first day is added : ",caisseFirstDay)
    // add autrui exchange 
    await this.autruiService.add(autruiFirstDay)
    await this.autruiService.add(autruiSecondDay)
    console.log(" first autrui exchange is added :", autruiFirstDay)
    //
    console.log("see your app data to confirme data is succefully added")
    console.log(" then see caisse/autrui/vaiida rapport for : 1/7/2020")
  }

  
  goHome(){
    this.route.navigate(
      ["tabs"] 
    )}

}
