import { Injectable } from '@angular/core'; 
import { Plugins  } from '@capacitor/core';
const { Storage } = Plugins;

import { IDate } from '../../entities/date.entities'
import { ICaisseExchangeInDB, ICaisseExchange, ICaisseExchangeSearsh } from '../entities/caisse-exchange.entities'
 
@Injectable({
  providedIn: 'root'
})
export class CaisseService { 
  
  storageKey = "caisse" 

  items: ICaisseExchangeInDB[] = []
  selectedItems:ICaisseExchangeInDB[]=[]
  selectedExchageItems:ICaisseExchangeInDB[]=[]
  itemToUpdate: ICaisseExchangeInDB
  itemInDb: ICaisseExchangeInDB
 
   
  constructor() { }

  public  async getItemById(id:any) {
    const x = this.items.filter( v => v.id === id)
    ////console.log(" x list : ",x )
    if( x.length > 0){
      this.itemToUpdate = x[0]
      return true
    }
    return false
   }
   
  public async getExchange(params:IDate){
    // get saved data
    let data =  await Storage.get({key:this.storageKey})
    this.items = JSON.parse(data.value) || []
    this.selectedExchageItems = this.items
    .filter( v => v.day === params.day)
    .filter( v => v.month === params.month)
    .filter( v => v.year === params.year) 
    //.filter( v => v.no === params.no)  
  } 
  
  
  public async getExchangeByMonthAndYear(params:IDate){
    // get saved data
    let data =  await Storage.get({key:this.storageKey})
    this.items = JSON.parse(data.value) || []
    this.selectedExchageItems = this.items
    .filter( v => v.month === params.month)
    .filter( v => v.year === params.year) 
    //.filter( v => v.no === params.no)  
  } 

   

  public async update(itemToUpdate:ICaisseExchangeInDB){
    await this.getList()
    const r = await this.getItemById(itemToUpdate.id) 
    if(r === true){ 
      const index = this.items.indexOf(this.itemToUpdate) 
      this.items[index] = itemToUpdate
      const data = { key:this.storageKey, value:JSON.stringify(this.items) }
      Storage.set(data )
    } 
  }
  public async add(item: ICaisseExchangeInDB) {
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    // create todo in db 
    item.id = Math.random() * Math.pow(10, 16) 
    // add this item to items list
    this.items.push(item)
    // prepare and save
    let dataToStore = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(dataToStore) 
    //console.log(" selected items ")
    //console.log(this.selectedItems)
  }
  public async getList() {
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    this.items = JSON.parse(data.value) || []
    return this.items
  }

  public async delete(id: number) {
    this.items = this.items.filter(Item => Item.id !== id)
    let data = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(data);
  }

  public async deleteAll() {
    this.items = []
    let data = { key: this.storageKey, value: JSON.stringify(this.items) }
    Storage.set(data);
    this.selectedExchageItems = []
  }
  public async getEddouvouaatToday(d: IDate) {
    await this.getList()
    const eddouvouaat = this.items
      .filter(v => v.day === d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === d.year)
      .filter(v => v.no === "d")
     
      //console.log(" caisse service , eddouvouaat: ",eddouvouaat)

    const essouhoubat = this.items
      .filter(v => v.day === d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === d.year)
      .filter(v => v.no === "s")
      
       //console.log(" caisse service , essouhoubat: ",essouhoubat)

    let totDevaa = 0
    let totSehib = 0
    let totCaisse = 0

    eddouvouaat.forEach(v => totDevaa = totDevaa + v.montant ) 
    essouhoubat.forEach(v => totSehib = totSehib + v.montant) 
    totCaisse = totDevaa - totSehib

    return { eddouvouaat: totCaisse,length:eddouvouaat.length+essouhoubat.length }
  }
  public async getErressidYamisCaisse(d: IDate) {
    await this.getList()
    const eddouvouaat = this.items
      .filter(v => v.day < d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === d.year)
      .filter(v => v.no === "s")
    
      //console.log(" caisse service , eddouvouaat: ",eddouvouaat)

    const essouhoubat = this.items
      .filter(v => v.day < d.day)
      .filter(v => v.month === d.month)
      .filter(v => v.year === d.year)
      .filter(v => v.no === "d")
      
     // console.log(" caisse service , essouhoubat: ",essouhoubat)

    let totDevaa = 0
    let totSehib = 0
    let totCaisse = 0

    eddouvouaat.forEach(v => totDevaa = totDevaa+ v.montant) 
    essouhoubat.forEach(v => totSehib = totSehib + v.montant) 
    totCaisse = totSehib - totDevaa 

    return   totCaisse 

  }



}
