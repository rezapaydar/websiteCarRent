import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorMatcher } from './customerrormatcher';
import { FormBuilder,Validators } from "@angular/forms";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers:[
    // {provide:ErrorStateMatcher,useClass:CustomErrorMatcher}
  ]
})
export class LoginComponent implements OnInit {
newform;
  constructor(private fb:FormBuilder) { 
    this.newform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
