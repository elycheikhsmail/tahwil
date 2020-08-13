import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ICaisse } from '../entities/caisse.entities';
import { ICaisseTableLines } from '../entities/caisse.entities';
import { days_per_month } from '../../entities/days.data' 
import { MessageService } from 'src/app/services/message.service';
import { IDate } from 'src/app/entities/date.entities';
import { CaisseService } from 'src/app/caisse/services/caisse.service';
import { CaisseSearshService } from '../services/caisse-searsh.service';
import { CaisseFromMsgService } from 'src/app/services/caisse-from-msg.service';


@Component({
  selector: 'app-caisse-rapport',
  templateUrl: './caisse-rapport.component.html',
  styleUrls: ['./caisse-rapport.component.css'],
})
export class CaisseRapportComponent implements OnInit {
  dateParams: IDate
  
  isFormReady = true
  totalIrsal = 0
  totalIstikbal = 0
  ennatij = 0
  eddouvouaat = 0
  erressidYamiss = 0
  erressidToday = 0
  lengthCaisse: boolean = false
  lengthMessage: boolean = false

  caisseTable: ICaisseTableLines;

  caisse: ICaisse;
 

  constructor(
    private caisseSearshService: CaisseSearshService,
    public messageService: MessageService,
    public caisseService: CaisseService,
    public caisseFromMsg :CaisseFromMsgService,
    private route: Router
  ) { }

  async ngOnInit() {
    this.dateParams = this.caisseSearshService.getDate()
    await this.searsh1Helper(this.dateParams)
  
  }

  getCaisseTable(d: IDate) {
    this.getCaisseTableHelper(d)
  } 

  async getCaisseTableHelper(d: IDate) {
    let data:ICaisseTableLines = await this.caisseFromMsg.getCaisseTable(d)
    //console.log(" caisse table message data : ",data)
    if (data ) {
      this.lengthMessage = true
    } else {
      this.lengthMessage = false
    }
    //console.log(" this.lengthMessage : ", this.lengthMessage)
    this.caisseTable = data
    this.totalIrsal = data.irsal.montant + data.irsal.lemien + data.irsal.lesien
    this.totalIstikbal = data.istikbal.montant
    this.ennatij = this.totalIrsal - this.totalIstikbal
    this.erressidToday = this.erressidToday + this.ennatij
    //console.log("getCaisseTable")
  }

  public async getEddouvouaat(d: IDate) {
    const data = await this.caisseService.getEddouvouaatToday(d)
    //console.log(" data : ", data)
    this.eddouvouaat = data.eddouvouaat
    //this.lengthCaisse = data.length
    this.erressidToday = this.erressidToday + this.eddouvouaat
  }

  async getErressidYamiss(d: IDate) {
    let erressidYamisMessage = await this.caisseFromMsg.getErressidYamesMessage(d)
    //console.log("erressidYamisMessag", erressidYamisMessage )
    let erressidYamisCaisee = await this.caisseService.getErressidYamisCaisse(d)
    //console.log("erressidYamisCaisee ",erressidYamisCaisee )

    this.erressidYamiss = erressidYamisMessage + erressidYamisCaisee
    this.erressidToday = this.erressidToday + this.erressidYamiss
  }



  async s1(event: IDate) {
    this.caisseSearshService.addParams(event)
    await this.searsh1Helper(event)

  }

 async  searsh1Helper(d: IDate) {
    //console.log("searsh 1 helper : d:IDate = ", d)
    this.erressidToday = 0
    this.getCaisseTable(d)
    this.getEddouvouaat(d)
    this.getErressidYamiss(d)
  }

  addToCaisse() {
    this.route.navigate(
      ["caisse", "list"]
    )
  }



}



