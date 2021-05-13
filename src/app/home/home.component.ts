import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { cities } from '../models/cities';
import { TypesOfCar } from "../models/types";
import { timeServe } from "../models/times";
import { HomeservService } from '../services/homeserv.service';
import { StatusservService } from '../services/statusserv.service';
import { SwiperComponent } from "swiper/angular";
// import {MatCarouselSlide} from "@ngmodule/material-carousel"
import { cars } from '../models/cars';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HomeservService, StatusservService],
})


export class HomeComponent implements OnInit {

  @ViewChild('citySel') citySel: ElementRef;
  @ViewChild('typeSel') typeSel: ElementRef;
  @ViewChild('timeSel') timeSel: ElementRef;
  // @ViewChild('fa-times-circle1') faTimesCircle1:ElementRef;
  // @ViewChild('fa-times-circle2') faTimesCircle2:ElementRef;
  // @ViewChild('fa-times-circle3') faTimesCircle3:ElementRef;

  formSearcher;
  disp = 'display:none !important;';
  disp1 = 'display:none !important;';
  disp2 = 'display:none !important;';

  types: TypesOfCar[] = [];
  cities: cities[] = [];
  timesServ: timeServe[] = [];
  benz: cars[] = [];
  toyota: cars[] = [];
  bmw: cars[] = [];

  // @HostListener('click', ['$event.target'])
  onClickCities(e) {
    this.disp = 'display:block !important;';
    // this.formSearcher.setValue({
    //   citySel:btn.innerText
    // })

    this.formSearcher.patchValue({
      citySel: e.target.innerText,
    })
    this.homeServ.cityC.next(e.target.innerText)
    // this.formSearcher.control['citySel'].setValue(btn.innerText)
  }



  onClickTypes(e) {
    this.disp1 = 'display:block !important;';

    // alert(btn.innerText)
    // this.formSearcher.setValue({
    //   typeSel:btn.innerText
    // })
    // this.typeSel = btn.innerText;
    this.formSearcher.patchValue({
      typeSel: e.target.innerText
    })
    this.homeServ.timeC.next(e.target.innerText)

    // this.formSearcher.control['typeSel'].setValue(btn.innerText)


  }
  onClickTimes(e) {
    this.disp2 = 'display:block !important;';

    // this.typeSel = btn.innerText;
    // this.formSearcher.setValue({
    //   typeSel:btn.innerText
    // })
    this.formSearcher.patchValue({
      timeSel: e.target.innerText
    })
    this.homeServ.typeC.next(e.target.innerText)


    // this.formSearcher.control['timeSel'].setValue(btn.innerText)
  }
  closeicon1() {
    this.disp = 'display:none !important;';

  }
  closeicon2() {
    this.disp1 = 'display:none !important;';

  }
  closeicon3() {
    this.disp2 = 'display:none !important;';

  }

  cityOpen() {
    this.citySel.nativeElement.style = "display:flex";
    this.typeSel.nativeElement.style = "display:none";
    this.timeSel.nativeElement.style = "display:none";
  }
  typeOpen() {
    this.citySel.nativeElement.style = "display:none";
    this.typeSel.nativeElement.style = "display:flex";
    this.timeSel.nativeElement.style = "display:none";
  }
  timeOpen() {
    this.citySel.nativeElement.style = "display:none";
    this.typeSel.nativeElement.style = "display:none";
    this.timeSel.nativeElement.style = "display:flex";
  }

  constructor(private fb: FormBuilder, private homeServ: HomeservService, private statusserv: StatusservService) {

    this.formSearcher = this.fb.group({
      citySel: [''],
      typeSel: [''],
      timeSel: ['']
    })

    this.types = [
      { titleType: "سواری معمولی", description: "ماشین سواری معمولی ، اجاره به صورت ساعتی", id: 1 },
      { titleType: "ماشین های استیشن(ون)", description: "ماشین های ، اجاره به صورت شبانه", id: 2 },
      { titleType: "ماشین عروس", description: "ماشین سواری با گل یا بدون گل ، اجاره به صورت ساعتی", id: 3 },
      { titleType: "سواری ویژه", description: "ماشین سواری ویژه با تخفیفات ویژه ، اجاره به صورت ساعتی", id: 4 },
    ]

    this.cities = [
      { id: 1, titleCity: 'همدان' },
      { id: 2, titleCity: 'تهران' },
      { id: 3, titleCity: 'زنجان' },
      { id: 4, titleCity: 'کرمان' },
      { id: 5, titleCity: 'مازندران' },
      { id: 6, titleCity: 'اصفهان' },
      { id: 7, titleCity: 'مشهد' },
      { id: 8, titleCity: 'شیراز' },
      { id: 9, titleCity: 'البرز' },
    ]

    this.timesServ = [
      { hour: "10", minute: "00" },
      { hour: "10", minute: "30" },
      { hour: "11", minute: "00" },
      { hour: "11", minute: "30" },
      { hour: "12", minute: "00" },
      { hour: "12", minute: "30" },
      { hour: "13", minute: "00" },
      { hour: "13", minute: "30" },
      { hour: "14", minute: "00" },
      { hour: "14", minute: "30" },
      { hour: "15", minute: "00" },
      { hour: "15", minute: "30" },
      { hour: "16", minute: "00" },
      { hour: "16", minute: "30" },
      { hour: "17", minute: "00" },
      { hour: "17", minute: "30" },
      { hour: "18", minute: "00" },
      { hour: "18", minute: "30" },
      { hour: "19", minute: "00" },
      { hour: "19", minute: "30" },
      { hour: "20", minute: "00" },
      { hour: "20", minute: "30" },
      { hour: "21", minute: "00" },
      { hour: "21", minute: "30" },
    ]

    this.benz = [
      { name: "بنز-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/benz/benz-c200.jpg" },
      { name: "بنز-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/benz/benz-E350.jpg" },
      { name: "بنز-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "../../assets/img/cars/benz/benz-s500.jpg" },
      { name: "بنز-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/benz/benz-SL63.jpg" },
      { name: "بنز-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/benz/benz-c200.jpg" },
      { name: "بنز-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "../../assets/img/cars/benz/benz-E350.jpg" },
      { name: "بنز-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/benz/benz-s500.jpg" },
      { name: "بنز-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/benz/benz-SL63.jpg" }
    ]

    this.toyota=[
      { name: "تویوتا-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/toyota/land-cruiser.jpg" },
      { name: "تویوتا-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/toyota/prrado-4-door.jpg" },
      { name: "تویوتا-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "../../assets/img/cars/toyota/toyota-baby.jpg" },
      { name: "تویوتا-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/toyota/toyota-camry.jpg" },
      { name: "تویوتا-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/toyota/tuscon.jpg" },
      { name: "تویوتا-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "../../assets/img/cars/toyota/land-cruiser.jpg" },
      { name: "تویوتا-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/toyota/prrado-4-door.jpg" },
      { name: "تویوتا-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/toyota/toyota-baby.jpg" }
    ]

    this.bmw=[
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "../../assets/img/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/bmw/bmw-x4.jpg" },
      { name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "../../assets/img/cars/bmw/bmw-528.jpeg" },
      { name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "../../assets/img/cars/bmw/bmw-i8.jpg" },
      { name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/bmw/bmw-x1.jpg" },
      { name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "../../assets/img/cars/bmw/bmw-x4.jpg" }
    ]

  }





  ngOnInit(): void {

    if (localStorage.getItem("isLogin") === "false") {
      console.log('fuckkkkkk');

    }
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
