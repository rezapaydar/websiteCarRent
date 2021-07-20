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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [StatusservService],
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
export class LoginComponent implements OnInit {
  isbig: Boolean = true;
  @ViewChild('signcheck') signcheck: ElementRef;
  newform;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  constructor(
    private fb: FormBuilder,
    private statusserv: StatusservService,
    public titleService: Title,
    private router: Router
  ) {
    this.newform = this.fb.group({
      username: ['', Validators.required, Validators.minLength(5)],
      password: ['', Validators.required, Validators.minLength(8)],
      signup: this.fb.group({
        signupcheck: [],
        emailsignup: [''],
      }),
    });
  }

  toggleRegister() {
    this.isbig = !this.isbig;
    setTimeout(() => {
      this.router.navigate(['register']);
    }, 1000);
  }

  get f() {
    return this.newform.controls;
  }

  ngOnInit(): void {
    this.setTitle('ورود / کارنتال');
  }

  login() {
    // this.statusserv.login(this.newform.value)
    console.log(this.newform.value);
  }
}
