import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { MessageAddComponent } from './message-add/message-add.component';
import { MessageDeleteComponent } from './message-delete/message-delete.component';
import { MessageSeaershOneComponent } from './message-seaersh-one/message-seaersh-one.component';
import { MessageUpdateComponent } from './message-update/message-update.component';
import { SearchByMontantComponent } from './search-by-montant/search-by-montant.component';
import { SearchByPhoneComponent } from './search-by-phone/search-by-phone.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MessagePageRoutingModule,
  ],
  declarations: [
    AboutUsComponent,
    MessagePage,
    MessageAddComponent,
    MessageDeleteComponent,
    MessageUpdateComponent,
    MessageSeaershOneComponent,
    SearchByMontantComponent,
    SearchByPhoneComponent
  ],
  exports:[
    AboutUsComponent,
    MessageAddComponent,
    MessageDeleteComponent,
    MessageUpdateComponent,
    MessageSeaershOneComponent,
    SearchByMontantComponent,
    SearchByPhoneComponent
  ]
})
export class MessagePageModule {}
