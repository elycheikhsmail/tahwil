import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaissePage } from './caisse.page';
import { CaisseListComponent } from './caisse-list/caisse-list.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CaissePage,
    //canActivate:[AuthGuard]
  },
  {
    path:'list',
    component:CaisseListComponent,
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaissePageRoutingModule {}
