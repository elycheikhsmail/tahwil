import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
 
import { days_per_month } from '../../entities/days.data' 
import { MessageService } from 'src/app/services/message.service';
import { IDate } from 'src/app/entities/date.entities'; 
import { ICaisseTableLines, ICaisse } from 'src/app/caisse/entities/caisse.entities';
import { AutruiService } from '../services/autrui.service'; 
import { CaisseSearshService } from 'src/app/caisse/services/caisse-searsh.service';
import { CaisseFromMsgService } from 'src/app/services/caisse-from-msg.service';

@Component({
  selector: 'app-autrui-rapport',
  templateUrl: './autrui-rapport.component.html',
  styleUrls: ['./autrui-rapport.component.scss'],
})
export class AutruiRapportComponent implements OnInit {
 
  dateParams: IDate
  
  isFormReady=true
  totalIrsal=0
  totalIstikbal=0
  ennatij=0
  eddouvouaat = 0
  erressidYamiss = 0
  erressidToday = 0
  lengthCaisse:boolean=false
  lengthMessage:boolean=false

  caisseTable : ICaisseTableLines ;
   
  caisse : ICaisse ;
 
  constructor(
    private caisseSearshService : CaisseSearshService   ,
    public messageService:MessageService,
    public caisseService : AutruiService,
    public caisseFromMsg :CaisseFromMsgService,
    private route : Router
  ) { }

 async ngOnInit() {  
    this.dateParams = this.caisseSearshService.getDate() 
    await this.searsh1Helper(this.dateParams)
    //this.searsh1Helper(params)
  }
  getCaisseTable(d:IDate){ 
    this.getCaisseTableHelper(d)
  }

  async getCaisseTableHelper(d:IDate){ 
    let data = await this.caisseFromMsg.getCaisseTable(d)
    if(data.length>0) {
      this.lengthMessage =  true
    }else{
      this.lengthMessage = false
    } 

       this.caisseTable = data
       this.totalIrsal = data.irsal.montant + data.irsal.lesien
       this.totalIstikbal = data.istikbal.montant + data.istikbal.lemien
       this.ennatij = this.totalIstikbal-this.totalIrsal 
       this.erressidToday = this.erressidToday + this.ennatij 
       console.log("getCaisseTable")
       console.log("this.erressidToday",this.erressidToday)
  }

  public async getEddouvouaat(d:IDate) {
    const data = await this.caisseService.getEddouvouaatToday(d)
    console.log(" data : ", data)
    this.eddouvouaat = data.eddouvouaat
    //this.lengthCaisse = data.length
    this.erressidToday = this.erressidToday + this.eddouvouaat 
  }

  async getErressidYamiss(d:IDate){ 
      let erressidYamisMessage = await this.caisseFromMsg.getErressidYamesAutruiMessage(d)
      console.log("erressidYamisMessage ",erressidYamisMessage )
      let erressidYamisCaisee = await this.caisseService.getErressidYamisCaisse(d)
      console.log("erressidYamisCaisee",erressidYamisCaisee)
      
      this.erressidYamiss = erressidYamisMessage + erressidYamisCaisee
      this.erressidToday = this.erressidToday + this.erressidYamiss
  }

  async s1(event:IDate){ 
      this.caisseSearshService.addParams(event)
      await this.searsh1Helper(event) 
  }

  async searsh1Helper(d:IDate){ 
    this.erressidToday = 0
    this.getCaisseTable(d) 
     this.getEddouvouaat(d)
     this.getErressidYamiss(d)
  }
  
  addToCaisse(){
    this.route.navigate(
      ["autrui","list"] 
    )
  }

 

}

 








 