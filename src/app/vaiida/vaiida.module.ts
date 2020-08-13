import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaiidaPageRoutingModule } from './vaiida-routing.module';

import { VaiidaPage } from './vaiida.page'; 

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VaiidaPageRoutingModule
  ],
  declarations: [
    VaiidaPage, 
  ] 

})
export class VaiidaPageModule {}
