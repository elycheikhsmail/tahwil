import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaiidaPage } from './vaiida.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: VaiidaPage,
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaiidaPageRoutingModule {}
