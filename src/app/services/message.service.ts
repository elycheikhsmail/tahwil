import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
const { Storage } = Plugins;

import { IMessage } from '../message/entities/messages.entities'
import { IDate } from '../entities/date.entities'
import { ICaisseTableLines, ICaisseLine } from '../caisse/entities/caisse.entities'
import { IVaiida, IVaiidaRapport } from '../vaiida/entities/vaiida-interface';
//import { IMessageSearchByPhone, IMessageSearchByMontant } from '../message/entities/message.entities';
//,IMessageInDB, IMessageSearshOne

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  storageKey = "messages"
  items: IMessageInDB[] = []; selectedItems: IMessageInDB[] = []
  day = 1; month = 1; year = 2020
  itemInDb: IMessageInDB; itemToUpdate: IMessageInDB
  x: ICaisseTableLines = y
  lastSearshOneParams: IMessageSearshOne = { no: "irsal", datetime: "" }

  constructor() { }


  reduceDateFeilds(item: any) {
    const d = new Date(item.year, item.month - 1, item.day)
    console.log(d)
    const date = d.toISOString();
    console.log(date)
    return date
  }

  async setDateExtraField(dateAsString: string) {
    let d: Date;
    d = new Date(dateAsString); console.log(d)
    this.day = d.getDate();
    this.month = d.getMonth() + 1;
    this.year = d.getFullYear();

  }

  lastSearshOneHelper(item: any) {
    this.lastSearshOneParams = {
      datetime:item.datetime,
      no:item.no
    }
  }

  public async addHelper(item: IMessageInDB) {
    item.id = Math.random() * Math.pow(10, 16)
    return item
  }

  public async add(item: IMessageInDB) {
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    // create todo in db 
    let itemInDb: IMessageInDB = await this.addHelper(item)
    // add this item to items list
    this.items.push(itemInDb)
    // prepare and save
    let dataToStore = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(dataToStore)
    this.lastSearshOneHelper(item)
  }

  public async getList() {
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    console.log(" this.items : ",this.items)
  }

  public async getItemById(id: any) {
    const x = this.items.filter(v => v.id === id)
    //console.log(" x list : ",x )
    if (x.length > 0) {
      this.itemToUpdate = x[0]
      return true
    }
    return false
  }

  public async getListByCritiriaOne(params: IMessageSearshOne) {
    this.setDateExtraField(params.datetime)
    console.log(" params de recherche ",
      this.day, this.month, this.year,
      params.no,
    )
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    this.selectedItems = this.items
      .filter(v => v.day == this.day)
      .filter(v => v.month == this.month)
      .filter(v => v.year == this.year)
      .filter(v => v.no === params.no)
    this.lastSearshOneHelper(params)
  }


  public async getListByPhoneAndDate(params: IMessageSearchByPhone) {
    this.setDateExtraField(params.datetime)
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    this.selectedItems = this.items
      .filter(v => v.day == this.day)
      .filter(v => v.month == this.month)
      .filter(v => v.year == this.year)
      .filter(v => v.no === params.no)
      .filter(v => v.tel === params.tel)

    this.lastSearshOneHelper(params)
  }


  public async getListByMontantAndDate(params: IMessageSearchByMontant) {
    this.setDateExtraField(params.datetime)
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    this.selectedItems = this.items
      .filter(v => v.day == this.day)
      .filter(v => v.month == this.month)
      .filter(v => v.year == this.year)
      .filter(v => v.no === params.no)
      .filter(v => v.montant === params.montant)
    this.lastSearshOneHelper(params)
  }



  public async getListByDate(params: IDate) {
    //console.log("params : ", params)
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    ////console.log(" messages as string :", data)
    this.items = JSON.parse(data.value) || []
    //console.log(" messages as object :", this.items)
    let selectedItems = this.items.filter(v => {
      //console.log("v.day",v.day)
      //console.log("params.day",params.day)
      //console.log(" condition value : ",v.day === params.day)
      //return 
      v.day === params.day

    })
    //console.log(" getListByDate /selected item ")
    //console.log(selectedItems)
    //.filter( v => v.month == params.month)
    //.filter( v => v.year == params.year) 
    /*.map(
      v => { 
        let isItemNotSelected:number = 0
        if( v.day != params.day ){//console.log("  condition 1 vraie")}
        if( v.month != params.month ){ //console.log("  condition 2 vraie ") }
        if( v.year != params.year ){ //console.log("  condition 3 vraie ") }
        //console.log("isItemNotSelected ", isItemNotSelected)
        if( isItemNotSelected > 0){
          //console.log(v)
          return v
        }
       
      }
    )*/
  }

  public async searshOneDefault() {
    const dn = Date.now()
    const dd = new Date(dn)
    let d = dd.toISOString()
    const params = { datetime: d, no: "irsal" }
    this.lastSearshOneParams = params
    await this.getListByCritiriaOne(params)
  }
 
  public async delete(id: number) {
    this.items = this.items.filter(Item => Item.id !== id)
    let data = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(data);
  }


  public async deleteAll() {
    this.items = []
    let data = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(data)
    this.selectedItems = []
  }

  public async update(itemToUpdate: IMessageInDB) {
    await this.getList()
    const r = await this.getItemById(itemToUpdate.id)
    if (r === true) {
      const index = this.items.indexOf(this.itemToUpdate)
      this.items[index] = itemToUpdate
      const data = { key: this.storageKey, value: JSON.stringify(this.items) }
      Storage.set(data)
    }
  }


}



export interface IMessageInDB extends IMessage {
  id: number;
}

export interface MessageSearshOneSchema {
  no: string;
  datetime: string;
}

export interface IMessageSearshOne extends MessageSearshOneSchema {

}

export interface IMessageSearchByPhone extends MessageSearshOneSchema {
  tel: number;
}


export interface IMessageSearchByMontant extends MessageSearshOneSchema {
  montant: number;
}


export const y: ICaisseTableLines = {
  irsal: {
    lemien: 200,
    lesien: 200,
    montant: 20000,
    commentaire: "",
    day: 1,
    month: 11,
    year: 2020
  },
  istikbal: {
    lemien: 200,
    lesien: 200,
    montant: 20000,
    commentaire: "",
    day: 1,
    month: 11,
    year: 2020
  },

}