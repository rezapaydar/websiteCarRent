import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorMatcher } from './customerrormatcher';
import { FormBuilder, Validators } from "@angular/forms";
import { StatusservService } from '../services/statusserv.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [
    StatusservService,
  ]
})
export class LoginComponent implements OnInit {
  @ViewChild('signcheck') signcheck: ElementRef;
  newform;
  constructor(private fb: FormBuilder, private statusserv: StatusservService) {

    this.newform = this.fb.group({
      username: ['', Validators.required,Validators.minLength(5)],
      password: ['', Validators.required,Validators.minLength(8)],
      signup: this.fb.group({
          signupcheck: [],
          emailsignup:['']
      })

    })


  }

  get f() { return this.newform.controls; }


  ngOnInit(): void {

  }

  login() {
    // this.statusserv.login(this.newform.value)
    console.log(this.newform.value);

  }


}
