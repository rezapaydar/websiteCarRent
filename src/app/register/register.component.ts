import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StatusservService } from '../services/statusserv.service';
import { Title } from '@angular/platform-browser';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'big',
        style({
          fontSize: '50px',
          opacity: 1,
          transition: '0.5s',
        })
      ),
      state(
        'small',
        style({
          fontSize: '30px',
          opacity: 0.8,
          transition: '0.5s',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {


  ngOnInit(): void {
    this.setTitle("ثبت نام / کانتال")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  @ViewChild('signcheck') signcheck: ElementRef;
  newform;
  isbig:Boolean=true;
  powerpass:Number;
  colorpowerpass={red:'#ff1744',green:'#00e676',yellow:'#ffff00'};
  colpass;
  strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
  hide=true;


  constructor(private fb: FormBuilder, private statusserv: StatusservService,public titleService:Title,public router:Router) { 


    this.newform = this.fb.group({
        name: ['', Validators.required, Validators.minLength(3)],
        family: ['', Validators.required, Validators.minLength(4)],
        mobile:['', Validators.required, Validators.minLength(11)],
        email: ['', Validators.required, Validators.minLength(4),Validators.email],
        password: ['', Validators.required, Validators.minLength(10)],
        passwordRepeat: ['', Validators.required, Validators.minLength(10)],
    });

  }

  toggleRegister() {
    this.isbig = !this.isbig;
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1000);
  }

register(){
  this.statusserv.register()
}

public powermetter(e):void{

if(e==null||e==undefined||e==""){

  this.powerpass=0;
  
}else{

  if(this.strongPassword.test(e)){

    this.powerpass=100;
    this.colpass=this.colorpowerpass.green;

  }else if(this.mediumPassword.test(e)){

    this.powerpass=70;
    this.colpass=this.colorpowerpass.yellow;

  }else {

    this.powerpass=30;
    this.colpass=this.colorpowerpass.red;
    
  }

}


}



}
