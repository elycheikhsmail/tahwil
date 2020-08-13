import { Component, OnInit } from '@angular/core';
import { IVaiida, IVaiidaRapport } from './entities/vaiida-interface';
import { MessageService } from '../services/message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { vaiidaSearshFormOptions } from './entities/vaiida-form.options';
import { days_per_month } from '../entities/days.data';
import { CaisseFromMsgService } from '../services/caisse-from-msg.service';
import { VaiidaFromMsgService } from '../services/vaiida-from-msg.service';

@Component({
  selector: 'app-vaiida',
  templateUrl: './vaiida.page.html',
  styleUrls: ['./vaiida.page.scss'],
})
export class VaiidaPage implements OnInit {
  v: IVaiida = { day_start: 1, day_end: 31, month: 1, year: 2020 }
  isBeforSearsh: boolean = true
  vaiidaRapport: IVaiidaRapport
  radioValue: string = "homme"

  vaiidaForm: FormGroup


  days_per_month: number[] = days_per_month
  max_day_per_this_month = 31

  constructor(
    private fb: FormBuilder,
    public caisseFromMsg :CaisseFromMsgService,
    public vaiidaFromMsgService :VaiidaFromMsgService,
    public messageService: MessageService
  ) { }

  async ngOnInit() {
    this.vaiidaForm = this.fb.group(vaiidaSearshFormOptions)
    const dn = Date.now()
    const dd = new Date(dn)
    let d = { day_start: 1, day_end: dd.getDate(), month: dd.getMonth() + 1, year: 2020 }
    this.vaiidaForm.patchValue(d)
    this.setDate()

    this.vaiidaForm.get("month").valueChanges.subscribe(
      data => {
        let monthId: number = data
        this.max_day_per_this_month = this.days_per_month[monthId - 1]

        const dayStartField = this.vaiidaForm.get("day_start")
        dayStartField.setValidators(
          Validators.max(this.max_day_per_this_month))
        let day_start = dayStartField.value
        dayStartField.setValue(day_start)


        const dayEndField = this.vaiidaForm.get("day_end")
        dayEndField.setValidators(
          Validators.max(this.max_day_per_this_month))
        let day_end = dayStartField.value
        dayStartField.setValue(day_end)
        this.vaiidaForm.updateValueAndValidity()
      },
      e => console.log("errors : ", e)
    )
  }

  setDate() {
    const dn = Date.now()
    const dd = new Date(dn)
    this.v = { day_start: 1, day_end: dd.getDate(), month: dd.getMonth() + 1, year: 2020 }

  }

  async searsh() {
    if (this.vaiidaForm.valid) {
      this.vaiidaRapport = await this.vaiidaFromMsgService.vaiidaRapport(this.vaiidaForm.value)
      this.isBeforSearsh = false
    }
  }


}
