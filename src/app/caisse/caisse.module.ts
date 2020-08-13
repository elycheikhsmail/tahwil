import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaissePageRoutingModule } from './caisse-routing.module';

import { CaissePage } from './caisse.page';
import { CaisseAddComponent } from './caisse-add/caisse-add.component';
import { CaisseDeleteComponent } from './caisse-delete/caisse-delete.component';
import { CaisseListComponent } from './caisse-list/caisse-list.component';
import { CaisseRapportComponent } from './caisse-rapport/caisse-rapport.component';
import { CaisseUpdateComponent } from './caisse-update/caisse-update.component';  

import { CaisseSearchMonthComponent } from './caisse-search-month/caisse-search-month.component';
import { DateSearchComponent } from './date-search/date-search.component';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CaissePageRoutingModule
  ],
  declarations: [
    CaissePage,
    CaisseRapportComponent,
    CaisseAddComponent,
    CaisseDeleteComponent,
    CaisseListComponent,
    CaisseUpdateComponent,   
    DateSearchComponent,
    CaisseSearchMonthComponent
  ],
  exports:[
    CaisseListComponent,
    CaisseUpdateComponent,
    CaisseDeleteComponent,   
  ]
})
export class CaissePageModule {}
