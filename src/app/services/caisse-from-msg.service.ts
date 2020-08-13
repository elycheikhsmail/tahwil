import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { IDate } from '../entities/date.entities';
import { ICaisseLine } from '../caisse/entities/caisse.entities';
import { IVaiida, IVaiidaRapport } from '../vaiida/entities/vaiida-interface';

@Injectable({
  providedIn: 'root'
})
export class CaisseFromMsgService {

  constructor(
    private messageservice : MessageService
  ) { }


  public async getIrsalToday(d: IDate) { 
    const messages = this.messageservice.items.filter(v => v.day == d.day)
      .filter(v => v.month == d.month)
      .filter(v => v.year == v.year)
      .filter(v => v.no == "irsal")

    let irsal_lemien:number = 0
    let irsal_lesien:number = 0
    let irsal_montant:number = 0
    messages.forEach(
      v => {
        irsal_lemien =  parseInt(`${irsal_lemien}`) + parseInt(`${ v.lemien}`) ;
        console.log(" irsal_lemien", irsal_lemien)
        irsal_lesien =  parseInt(`${irsal_lesien}`) +  parseInt(`${v.lesien}`);
        irsal_montant =   parseInt(`${irsal_montant}`) + parseInt(`${ v.montant}`);
      }
    )
    const irsal_lineOne = {
      lemien: irsal_lemien,
      lesien: irsal_lesien,
      montant: irsal_montant,
      day: d.day,
      month: d.month,
      year: d.year
    }
    const l = messages.length
    console.log("get irsal today length : ", l)

    //console.log("irsal length : ",messages.length)
    return { irsal_lineOne, length: l }
  }


  public async getIrsalYamiss(d: IDate) {
    const messages = this.messageservice.items
      .filter(v => v.day < d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === v.year)
      .filter(v => v.no === "irsal")

    let irsal_lemien = 0
    let irsal_lesien = 0
    let irsal_montant = 0
    messages.forEach(
      v => {
        irsal_lemien += parseInt(`${v.lemien}`) ;
        irsal_lesien += parseInt(`${v.lesien}`) ;
        irsal_montant += parseInt(`${v.montant}`) ;
      }
    )
    const irsal_lineOne = {
      lemien: irsal_lemien,
      lesien: irsal_lesien,
      montant: irsal_montant,
      day: d.day,
      month: d.month,
      year: d.year
    }
    return irsal_lineOne
  }


  public async getIstikbalToday(d: IDate) {
    const messages = this.messageservice.items
      .filter(v => v.day === d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === v.year)
      .filter(v => v.no === "istikbal")
    let istikbal_lemien = 0
    let istikbal_lesien = 0
    let istikbal_montant = 0
    messages.forEach(
      v => {
        istikbal_lemien += parseInt(`${v.lemien}`);
        istikbal_lesien += parseInt(`${v.lesien}`);
        istikbal_montant += parseInt(`${v.montant}`);
      }
    )
    const istikbal_lineTwo: ICaisseLine = {
      lemien: istikbal_lemien,
      lesien: istikbal_lesien,
      montant: istikbal_montant,
      day: d.day,
      month: d.month,
      year: d.year

    }
    //console.log("istikbal length : ",messages.length)
    return { istikbal_lineTwo, length: messages.length }
  }


  public async getIstikbalYamiss(d: IDate) {
    const messages = this.messageservice.items
      .filter(v => v.day < d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === v.year)
      .filter(v => v.no === "istikbal")
    let istikbal_lemien = 0
    let istikbal_lesien = 0
    let istikbal_montant = 0
    messages.forEach(
      v => {
        istikbal_lemien += parseInt(`${v.lemien}`);
        istikbal_lesien += parseInt(`${v.lesien}`);
        istikbal_montant += parseInt(`${v.montant}`);
      }
    )
    const istikbal_lineTwo: ICaisseLine = {
      lemien: istikbal_lemien,
      lesien: istikbal_lesien,
      montant: istikbal_montant,
      day: d.day,
      month: d.month,
      year: d.year

    }
    return istikbal_lineTwo
  }

  public async getCaisseTable(d: IDate) {
    //await this.messageservice.getListByDate(d)
    await this.messageservice.getList()
    const irsal = await this.getIrsalToday(d)
    const istikbal = await this.getIstikbalToday(d)
    let l = irsal.length + irsal.length
    console.log("l : ", l)
    const msg = {
      irsal: irsal.irsal_lineOne,
      istikbal: istikbal.istikbal_lineTwo,
      length: l
    }
    //console.log(" message service /get caise table methode / length : ",msg.length)
    return msg
  }


  public async getErressidYamesMessage(d: IDate) {
    await this.messageservice.getList()
    const irsal_lineOne = await this.getIrsalYamiss(d)
    const istikbal_lineTwo = await this.getIstikbalYamiss(d)
    let r_plus = irsal_lineOne.montant + irsal_lineOne.lemien + irsal_lineOne.lesien
    let r_moins = istikbal_lineTwo.montant
    let r = r_plus - r_moins
    return r
  }


  public async getErressidYamesAutruiMessage(d: IDate) {
    await this.messageservice.getList()
    const irsal_lineOne = await this.getIrsalYamiss(d)
    const istikbal_lineTwo = await this.getIstikbalYamiss(d)
    let r_plus = irsal_lineOne.montant + irsal_lineOne.lesien
    let r_moins = istikbal_lineTwo.montant + istikbal_lineTwo.lemien
    let r = r_moins - r_plus
    return r
  }




}
