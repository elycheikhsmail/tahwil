import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  dateForma = "DD/MM/YYYY"
  dateInput:any = "1994-12-15T13:47"
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;


  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (data) => console.log('Clicked Save!',data.month.value)
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }


  //constructor() { }

  async ngOnInit() {
    //2020-08-08T00:00:00-00:00
    let d  = new Date()
    let y = d.getFullYear()
    let m = d.getMonth()
    let dd = d.getDay()

    let ch = "2020-5-8T13:47:00-00:00"
    this.dateInput = d.toISOString()
    //JSON.stringify(ch)
  }
  showDate(){
    console.log(this.dateInput)
  }

}
