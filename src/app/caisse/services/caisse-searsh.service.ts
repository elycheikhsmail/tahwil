import { Injectable } from '@angular/core';
import { IDate } from 'src/app/entities/date.entities'; 
import { Plugins, Capacitor } from '@capacitor/core';
import { ICaisseExchangeSearsh } from '../entities/caisse-exchange.entities';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CaisseSearshService {

  storageKey = "caisse_searsh"
  searshParam:IDate
  
  constructor() { }

  async getParams(){
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    let query:IDate = JSON.parse(data.value)|| this.getDate()
    return query
  }

  async getParamsWithNO(){
    // get saved data
    let data = await Storage.get({ key: this.storageKey })
    let q:IDate = JSON.parse(data.value)||this.getDate()
    let query :ICaisseExchangeSearsh = {
      datetime:"",
      day:q.day,
      month:q.month,
      year:q.year,
      no:"d"
    }
    return query
  }

  async addParams(query:IDate){ 
    Storage.set({ key: this.storageKey,value:JSON.stringify(query) })
  }
  async addParamsFromAny(query:any){
    const q:IDate = {
      day:query.day||1,
      month:query.month,
      year:query.year
    }
    await this.addParams(q)
  }

  getDate():IDate{
    const dn = Date.now()
    const dd = new Date(dn)
    const d:IDate = { day:dd.getDate(), month:dd.getMonth()+1, year:2020 }
    return d
  }

  


  




}
