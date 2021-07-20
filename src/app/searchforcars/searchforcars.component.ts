import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { cars } from '../models/cars';

@Component({
  selector: 'app-searchforcars',
  templateUrl: './searchforcars.component.html',
  styleUrls: ['./searchforcars.component.sass']
})
export class SearchforcarsComponent implements OnInit {
  showFiller = false;
  @ViewChild('newcheckbox') checkaya: ElementRef;

  resultSearch: cars[] = [];
  getcars: cars[] = [];
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  myControl = new FormControl();
  options: string[] = ['benz', 'toyota', 'bmw', "hyundai", "porsche", "kia"];
  filteredOptions: Observable<string[]>;

  task = {
    name: 'انتخاب همگی',
    completed: true,
    color: 'primary',
    subtasks: [
      { name: 'benz ', completed: false, color: 'accent' },
      { name: 'bmw', completed: false, color: 'accent' },
      { name: 'toyota', completed: false, color: 'accent' },
      { name: 'hyundai', completed: false, color: 'accent' },
      { name: 'kia', completed: false, color: 'accent' },
      { name: 'porsche', completed: false, color: 'accent' },
    ],
    reservasion:[
      {name:'روزانه',completed:false,color:'accent'},
      {name:'هفتگی',completed:false,color:'accent'},
      {name:'ماهانه',completed:false,color:'accent'},
    ]
  };

  

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  constructor(public titleService:Title,public router:Router) {

    this.appendItems(0, this.sum);

  }


  getcarss() {
    return [
      {id:1, name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      {id:2, name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:3, name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:4, name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      {id:5, name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:6, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:7, name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:8, name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:9, name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      {id:10, name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:11, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:12, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:13, name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:14, name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      {id:15, name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:16, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:17, name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:18, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:19, name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:20, name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:21, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:22, name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:23, name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:24, name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:25, name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      {id:26, name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      {id:27, name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      {id:28, name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      {id:29, name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      {id:30, name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      {id:31, name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      {id:32, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:33, name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:34, name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      {id:35, name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:36, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:37, name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:38, name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      {id:39, name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:40, name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:41, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:42, name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:43, name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      {id:44, name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      {id:45, name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:46, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:47, name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:48, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:49, name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:50, name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:51, name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:52, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:53, name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:54, name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:56, name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:57, name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      {id:58, name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      {id:59, name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      {id:60, name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      {id:61, name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      {id:62, name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      {id:63, name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      {id:64, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:65, name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:66, name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      {id:67, name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:68, name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:69, name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:70, name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      {id:71, name: "kia-cerato", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-cerato.jpg" },
      {id:72, name: "kia-sorento", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-sorento.jpg" },
      {id:73, name: "optima", brand: "kia", daily: true, monthy: false, weeky: false, img: "assets/images/cars/kia/optima.jpg" },
      {id:74, name: "sportage", brand: "kia", daily: true, monthy: true, weeky: false, img: "assets/images/cars/kia/sportage.jpg" },
      {id:75, name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:76, name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:77, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:78, name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:79, name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      {id:80, name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      {id:81, name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:82, name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:83, name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:84, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:85, name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:86, name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:87, name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:88, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:89, name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:90, name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:91, name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:92, name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      {id:93, name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      {id:94, name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      {id:95, name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      {id:96, name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      {id:97, name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      {id:98, name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      {id:99, name: "kia-cerato", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-cerato.jpg" },
      {id:100, name: "kia-sorento", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-sorento.jpg" },
      {id:101, name: "optima", brand: "kia", daily: true, monthy: false, weeky: false, img: "assets/images/cars/kia/optima.jpg" },
      // {id:102, name: "sportage", brand: "kia", daily: true, monthy: true, weeky: false, img: "assets/images/cars/kia/sportage.jpg" },

    ]
  }

  allcheck(){

    if(this.task.completed==true){
      this.getcars=this.getcarss()

      // alert("fuckkk")
    }else{

      this.getcars=[]


    }

  }

  ngOnInit(): void {
    this.setTitle("سفارش / کارنتال")
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.getcars = this.getcarss();

  }


  doSearch(event) {

    if(event.toLowerCase()=="all"){
            this.getcars = this.getcarss();

    }else{

      this.resultSearch = this.getcarss().filter((item) => {

        // console.log(item.name.toLowerCase());
    
    
          return item.name.toLowerCase().includes(event.toLowerCase());
    
        })
        this.getcars = this.resultSearch;

    }

  }

  reservaisonChange(e,event){
switch (e.name) {
  case "روزانه":
    this.resultSearch = this.getcarss().filter((item) => {

      // console.log(item.name.toLowerCase());
  
  
        return item.daily;
  
      })
      this.getcars = this.resultSearch;

    break;

    case "هفتگی":
    this.resultSearch = this.getcarss().filter((item) => {

      // console.log(item.name.toLowerCase());
  
  
        return item.weeky;
  
      })
      this.getcars = this.resultSearch;
    break;

    case "ماهانه":
    this.resultSearch = this.getcarss().filter((item) => {

      // console.log(item.name.toLowerCase());
  
  
        return item.monthy;
  
      })
    this.getcars = this.resultSearch;
    break;  

  default:
    break;




 }
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  allComplete: boolean = false;

  updateAllComplete(e,event) {

 if(event.checked==true){
  this.resultSearch = this.getcarss().filter((item) => {

      return item.name.toLowerCase().includes(e.toLowerCase());

    })
 }
      this.getcars = this.resultSearch;
      // this.task.subtasks.forEach(t => t.completed = false);

  }

  newcheckbox(){
    console.log(this.checkaya.nativeElement);
    
  }

  someComplete(): boolean {

    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    if (this.task.reservasion == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
    this.task.reservasion.forEach(t => t.completed = completed);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, " ", this.generateWord()].join(""));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  onUp(ev) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  generateWord() {
    return;
  }
  gotolink(e){

    console.log(e);
    
    this.router.navigate(['/cars'],{queryParams:{id:e.id}})

  }


}
