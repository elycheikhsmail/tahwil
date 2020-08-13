import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'autrui',
        loadChildren: ()=> import('../autrui/autrui.module').then(m=>m.AutruiPageModule)
      }
      ,
      {
        path: 'vaiida',
        loadChildren: () => import('../vaiida/vaiida.module').then(m => m.VaiidaPageModule)
      }
      ,  
      {
        path: 'message',
        loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule)
      },
      {
        path: 'caisse',
        loadChildren: () => import('../caisse/caisse.module').then(m => m.CaissePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/message',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/message',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
