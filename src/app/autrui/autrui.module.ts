import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutruiPageRoutingModule } from './autrui-routing.module';

import { AutruiPage } from './autrui.page';
import { AutruiAddComponent } from './autrui-add/autrui-add.component';
import { AutruiListComponent } from './autrui-list/autrui-list.component';
import { AutruiDeleteComponent } from './autrui-delete/autrui-delete.component'; 
import { AutruiUpdateComponent } from './autrui-update/autrui-update.component';
import { AutruiRapportComponent } from './autrui-rapport/autrui-rapport.component'; 
import { DateSearshComponent } from './date-searsh/date-searsh.component';
import {AutruiSearchMonthComponent} from './autrui-search-month/autrui-search-month.component'
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //FormsModule,
    IonicModule,
    AutruiPageRoutingModule
  ],
  declarations: [
    AutruiPage,
    AutruiAddComponent,
    AutruiListComponent,
    AutruiDeleteComponent,
    AutruiUpdateComponent, 
    AutruiRapportComponent,
    DateSearshComponent,
    AutruiSearchMonthComponent
    
  ],
  exports:[
    AutruiAddComponent,
    AutruiListComponent,
    AutruiDeleteComponent,
    AutruiUpdateComponent,  
   // DateSearshComponent

  ]
})
export class AutruiPageModule {}
