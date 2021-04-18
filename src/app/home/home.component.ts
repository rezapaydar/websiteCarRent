import { Component, OnInit } from '@angular/core';
import { cities } from '../models/cities';
import { TypesOfCar } from "../models/types";
import { timeServe } from "../models/times";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  types:TypesOfCar[]=[];
  cities:cities[]=[];
  timesServ:timeServe[]=[];

  constructor() { 

    this.types=[
      {titleType:"سواری معمولی",description:"ماشین سواری معمولی ، اجاره به صورت ساعتی",id:1},
      {titleType:"ماشین های استیشن(ون)",description:"ماشین های ، اجاره به صورت شبانه",id:2},
      {titleType:"ماشین عروس",description:"ماشین سواری با گل یا بدون گل ، اجاره به صورت ساعتی",id:3},
      {titleType:"سواری ویژه",description:"ماشین سواری ویژه با تخفیفات ویژه ، اجاره به صورت ساعتی",id:4},
    ]

    this.cities=[
    {id:1,titleCity:'همدان'},
    {id:2,titleCity:'تهران'},
    {id:3,titleCity:'زنجان'},
    {id:4,titleCity:'کرمان'},
    {id:5,titleCity:'مازندران'},
    {id:6,titleCity:'اصفهان'},
    {id:7,titleCity:'مشهد'},
    {id:8,titleCity:'شیراز'},
    {id:9,titleCity:'البرز'},
    ]

    this.timesServ=[
      {hour:"10",minute:"00"},
      {hour:"10",minute:"30"},
      {hour:"11",minute:"00"},
      {hour:"11",minute:"30"},
      {hour:"12",minute:"00"},
      {hour:"12",minute:"30"},
      {hour:"13",minute:"00"},
      {hour:"13",minute:"30"},
      {hour:"14",minute:"00"},
      {hour:"14",minute:"30"},
      {hour:"15",minute:"00"},
      {hour:"15",minute:"30"},
      {hour:"16",minute:"00"},
      {hour:"16",minute:"30"},
      {hour:"17",minute:"00"},
      {hour:"17",minute:"30"},
      {hour:"18",minute:"00"},
      {hour:"18",minute:"30"},
      {hour:"19",minute:"00"},
      {hour:"19",minute:"30"},
      {hour:"20",minute:"00"},
      {hour:"20",minute:"30"},
      {hour:"21",minute:"00"},
      {hour:"21",minute:"30"},
    ]
  
  }



  ngOnInit(): void {
  }

}
