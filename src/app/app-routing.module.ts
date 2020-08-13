import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataTestComponent } from './data-test/data-test.component';
//import { AuthGuard } from './guards/auth.guard';
import { AskBeforeUseComponent } from './ask-before-use/ask-before-use.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  // ??
  {
    path:'about',
    component:AboutUsComponent
  }, 
  {
    path:'contact-us',
    component:ContactUsComponent
  }, 
  {
    path:'login',
    component:LoginComponent
  }, 
  {
    path:'test',
    component:DataTestComponent
  }, 
  {
    path:'ask',
    component:AskBeforeUseComponent
  },

  {
    path: 'caisse',
    loadChildren: () => import('./caisse/caisse.module').then( m => m.CaissePageModule),
   // canActivate:[AuthGuard]
  } ,
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'vaiida',
    loadChildren: () => import('./vaiida/vaiida.module').then( m => m.VaiidaPageModule)
  },
  {
    path: 'autrui',
    loadChildren: () => import('./autrui/autrui.module').then( m => m.AutruiPageModule)
  },
  {
    path: '',
    redirectTo: '/message',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
