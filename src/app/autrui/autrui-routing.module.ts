import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutruiPage } from './autrui.page';
import { AutruiListComponent } from './autrui-list/autrui-list.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AutruiPage,
    //canActivate:[AuthGuard]
  },
  
  {
    path:'list',
    component:AutruiListComponent,
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutruiPageRoutingModule {}
