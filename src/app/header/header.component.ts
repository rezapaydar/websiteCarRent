import { Component, OnInit } from '@angular/core';
import { StatusservService } from '../services/statusserv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
disp1;
disp2;
  constructor(private statusserv:StatusservService) {
   }

  ngOnInit(): void {
    this.disp1=this.statusserv.disp;
    console.log(this.disp1);
    
  }

  login(){
    this.statusserv.login()
  }

}
