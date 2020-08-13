import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { IVaiidaRapport, IVaiida } from '../vaiida/entities/vaiida-interface';

@Injectable({
  providedIn: 'root'
})
export class VaiidaFromMsgService {

  constructor(
    private messageservice : MessageService
  ) { }

  
  public async vaiidaRapport(params: IVaiida) {
    console.log("params", params)
    await this.messageservice.getList()
    const messages = this.messageservice.items
      .filter(v => v.month == params.month)
      .filter(v => v.year == params.year)
      .filter(v => v.day <= params.day_end)
      .filter(v => v.day >= params.day_start)

    console.log("vaiida messages", messages)
    let v_irsal = 0
    let v_istikbal = 0
    let v_global = 0
    messages.forEach(
      v => {
        if (v.no == "irsal") {
          v_irsal += v.lemien
        } else {
          v_istikbal += v.lemien
        }
      }
    )

    v_global = v_irsal + v_istikbal
    let vaiida_rapport: IVaiidaRapport = {
      vaiida_sadira: v_irsal,
      vaiida_warida: v_istikbal,
      vaiida_global: v_global,
      data_length: messages.length
    }

    return vaiida_rapport
  }





}
