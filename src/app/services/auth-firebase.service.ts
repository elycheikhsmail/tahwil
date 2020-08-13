import { Injectable, NgZone } from '@angular/core'; 
import { User } from "./user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class AuthFirebaseService {
  userData: any;

  constructor(
    public _angularFireStore: AngularFirestore,
    public _angularFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this._angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Login in with email/password
  login(email:string, password:string) { 
    return this._angularFireAuth.signInWithEmailAndPassword(email, password)
  }

  // Register user with email/password
  RegisterUser(email:string, password:string) {
    return this._angularFireAuth.createUserWithEmailAndPassword(email, password)
  }
 
 

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this._angularFireStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName, 
    }
    return userRef.set(userData, { merge: true })
  }

  // Sign-out 
  logout() { 
    this._angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}