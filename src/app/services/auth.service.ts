import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Iuser } from '../auth/entities/login.entities';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey = "token"  
  constructor(
    private platform: Platform
  ) { }

  isLogin(): boolean {
    return !!localStorage.getItem("auth")
  }

  async isAlreadyHaveToken() {
    const tokenString = await Storage.get({ key: this.storageKey })
    const tokenObject = JSON.parse(tokenString.value) || null
    if (tokenObject) {
      return true
    } else {
      return false
    }
  }

  authentificate(user: Iuser) {
    if (user.name == "ely" && user.password == "ely1234sidi") {
      return true
    } else {
      return false
    }

  }

  async saveToken(token: string) {
    Storage.set({ key: this.storageKey, value: token })
  }

}
