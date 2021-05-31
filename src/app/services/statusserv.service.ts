import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class StatusservService {
  name="مهمان"
  isLogin: Boolean = false;
  isRegister: Boolean = false;
  disp;

  constructor() {
    localStorage.setItem("isLogin", "false")
    localStorage.setItem("isRegister", "false")
  }

  login() {
    // alert(login)
    this.isLogin = true;
    this.disp = 'display:none !important;';
// alert()
  }

  signout(){
  this.disp = 'display:initial !important;';

  }

  register() {
    this.isRegister = true
  }
}
