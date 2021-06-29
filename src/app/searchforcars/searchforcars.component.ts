import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { cars } from '../models/cars';

@Component({
  selector: 'app-searchforcars',
  templateUrl: './searchforcars.component.html',
  styleUrls: ['./searchforcars.component.sass']
})
export class SearchforcarsComponent implements OnInit {

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



  constructor() {
    this.appendItems(0, this.sum);

  }


  getcarss() {
    return [
      { name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      { name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },

      { name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      { name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      { name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      { name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      { name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      { name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      { name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      { name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      { name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      { name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      { name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      { name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      { name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      { name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "benz-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "benz-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "benz-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      { name: "benz-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      { name: "benz-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      { name: "kia-cerato", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-cerato.jpg" },
      { name: "kia-sorento", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-sorento.jpg" },
      { name: "optima", brand: "kia", daily: true, monthy: false, weeky: false, img: "assets/images/cars/kia/optima.jpg" },
      { name: "sportage", brand: "kia", daily: true, monthy: true, weeky: false, img: "assets/images/cars/kia/sportage.jpg" },
      { name: "benz-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "toyota-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      { name: "toyota-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      { name: "toyota-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      { name: "toyota-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      { name: "toyota-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      { name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      { name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      { name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },
      { name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      { name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      { name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      { name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
      { name: "kia-cerato", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-cerato.jpg" },
      { name: "kia-sorento", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-sorento.jpg" },
      { name: "optima", brand: "kia", daily: true, monthy: false, weeky: false, img: "assets/images/cars/kia/optima.jpg" },
      { name: "sportage", brand: "kia", daily: true, monthy: true, weeky: false, img: "assets/images/cars/kia/sportage.jpg" },

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

  checkbrand(){



  }

  ngOnInit(): void {

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

  reservaisonChange(...e){
    console.log(e);
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  allComplete: boolean = false;

  updateAllComplete(e,event) {

    // console.log();
    
    
    // this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    // console.log(e,event);
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


}
