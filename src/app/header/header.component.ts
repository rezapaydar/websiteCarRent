import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusservService } from '../services/statusserv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
isloggedin:Boolean = this.statusserv.isLogin;
status=this.statusserv.name;
disp1;
disp2;
  constructor(private statusserv:StatusservService,private router:Router) {
   }

  ngOnInit(): void {
    this.disp1=this.statusserv.disp;
    console.log(this.disp1);
    
  }

  managerprofile(){

if(this.isloggedin==true){
  this.router.navigate(['dashboard'])
}else{
  this.router.navigate(['login'])

}

  }

  // login(){
  //   this.statusserv.login()
  // }

}
