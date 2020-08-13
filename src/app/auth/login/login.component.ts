import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginFormOptions } from '../entities/login.FormOptions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Iuser } from '../entities/login.entities';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isAuthSuccess = true
  isLoginFormValid = true
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _authFireService: AuthFirebaseService
  ) { }

  async ngOnInit() {
    this.loginForm = this.fb.group(loginFormOptions)

  }

  async authentificateUser() {
    if (this.loginForm.valid) {
      let user: Iuser = this.loginForm.value
      let result = this._authFireService.login(user.name, user.password).then(
        result => {
          console.log(result)
          let token = "jjjj"
          this._authService.saveToken(token)
          this._router.navigate(["tabs", "message"])
        }
      ).catch(
        (err) => { 
          console.log(err)
          this.isAuthSuccess = false 
        }
      )

    }



  }
  async manualAuthentification() {
    if (this.loginForm.valid) {
      let user: Iuser = this.loginForm.value
      let result = this._authService.authentificate(user)
      if (result) {
        let token = "jjjj"
        await this._authService.saveToken(token)
        this._router.navigate(["tabs", "message"])
      } else {
        this.isAuthSuccess = false
      }
    } else {
      this.isLoginFormValid = false
    }

  }

}
