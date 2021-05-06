import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeservService {

  cityC=new BehaviorSubject("none"); 
  typeC=new BehaviorSubject("none"); 
  timeC=new BehaviorSubject("none"); 

  constructor() { }
}
