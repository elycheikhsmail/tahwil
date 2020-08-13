import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LoginComponent } from './auth/login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //ContactUsComponent
  ], 
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDLkcHNrl_huVzfswKzBn3dzzqO1cPMlFs",
        authDomain: "tahwil-app.firebaseapp.com",
        databaseURL: "https://tahwil-app.firebaseio.com",
        projectId: "tahwil-app",
        storageBucket: "tahwil-app.appspot.com",
        messagingSenderId: "843021954427",
        appId: "1:843021954427:web:19a0546b68edec742961de",
        measurementId: "G-DXFF6PZ13N"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ], 
  providers: [
    AngularFirestoreModule,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


// app.module.ts
/*
import { environment } from '../environments/environment';

@NgModule({
  declarations: [...],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [...]
})

export class AppModule {}
*/