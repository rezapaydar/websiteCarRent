import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { cities } from '../models/cities';
import { TypesOfCar } from "../models/types";
import { timeServe } from "../models/times";
import { HomeservService } from '../services/homeserv.service';
import { StatusservService } from '../services/statusserv.service';
import { SwiperComponent } from "swiper/angular";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

// import {MatCarouselSlide} from "@ngmodule/material-carousel"
import { cars } from '../models/cars';
import { Articles } from "../models/articles";

import SwiperCore, { Parallax, Pagination, Navigation } from "swiper/core";
import { Title } from '@angular/platform-browser';

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

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
  timesServ = [];
  benz: cars[] = [];
  toyota: cars[] = [];
  bmw: cars[] = [];
  hyu: cars[] = [];
  kia: cars[] = [];
  porsche: cars[] = [];



  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

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

  constructor(public router:Router,private fb: FormBuilder, private homeServ: HomeservService, private statusserv: StatusservService,public titleService:Title) {

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
      {showbe:'خیابان شریعتی ، پشت کافه حیدر'},
      {showbe:'خیابان شریعتی ، پشت کافه حیدر'},
      {showbe:'خیابان شریعتی ، پشت کافه حیدر'},
      {showbe:'خیابان شریعتی ، پشت کافه حیدر'},
      {showbe:'خیابان شریعتی ، پشت کافه حیدر'},
    ]

    this.benz = [
      {id:102, name: "بنز-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:103, name: "بنز-e350", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:104, name: "بنز-s500", brand: "benz", daily: true, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-s500.jpg" },
      {id:105, name: "بنز-sl63", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" },
      {id:106, name: "بنز-c200", brand: "benz", daily: true, monthy: true, weeky: true, img: "assets/images/cars/benz/benz-c200.jpg" },
      {id:107, name: "بنز-e350", brand: "benz", daily: false, monthy: true, weeky: false, img: "assets/images/cars/benz/benz-E350.jpg" },
      {id:108, name: "بنز-s500", brand: "benz", daily: true, monthy: false, weeky: true, img: "assetimages/cars/benz/benz-s500.jpg" },
      {id:109, name: "بنز-sl63", brand: "benz", daily: true, monthy: false, weeky: true, img: "assets/images/cars/benz/benz-SL63.jpg" }
    ]

    this.toyota=[
      {id:110, name: "تویوتا-land cuiser", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:111, name: "تویوتا-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:112, name: "تویوتا-baby", brand: "toyota", daily: true, monthy: true, weeky: false, img: "assets/images/cars/toyota/toyota-baby.jpg" },
      {id:113, name: "تویوتا-camry", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/toyota-camry.jpg" },
      {id:114, name: "تویوتا-tuscon", brand: "toyota", daily: true, monthy: true, weeky: true, img: "assets/images/cars/toyota/tuscon.jpg" },
      {id:115, name: "تویوتا-land cuiser", brand: "toyota", daily: false, monthy: true, weeky: false, img: "assets/images/cars/toyota/land-cruiser.jpg" },
      {id:116, name: "تویوتا-prrado", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/prrado-4-door.jpg" },
      {id:117, name: "تویوتا-baby", brand: "toyota", daily: true, monthy: false, weeky: true, img: "assets/images/cars/toyota/toyota-baby.jpg" }
    ]

    this.bmw=[
      {id:118, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:119, name: "bmw-i8", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:120, name: "bmw-x1", brand: "bmw", daily: true, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:121, name: "bmw-x4", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" },
      {id:122, name: "bmw-528", brand: "bmw", daily: true, monthy: true, weeky: true, img: "assets/images/cars/bmw/bmw-528.jpeg" },
      {id:123, name: "bmw-i8", brand: "bmw", daily: false, monthy: true, weeky: false, img: "assets/images/cars/bmw/bmw-i8.jpg" },
      {id:124, name: "bmw-x1", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x1.jpg" },
      {id:125, name: "bmw-x4", brand: "bmw", daily: true, monthy: false, weeky: true, img: "assets/images/cars/bmw/bmw-x4.jpg" }
    ]

    this.hyu=[
      {id:126, name: "hyundai-genesis", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-genesis.jpg" },
      {id:127, name: "hyundai-santa-fe", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-santa-fe.jpg" },
      {id:128, name: "hyundai-sonata", brand: "hyundai", daily: true, monthy: true, weeky: true, img: "assets/images/cars/hyu/hyundai-sonata.jpg" },

    ]

    this.porsche=[
      {id:129, name: "porsche-boxster", brand: "porsche", daily: false, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-boxster.jpg" },
      {id:130, name: "porsche-cayenne", brand: "porsche", daily: true, monthy: false, weeky: true, img: "assets/images/cars/porsche/porsche-cayenne.jpg" },
      {id:131, name: "porsche-macan", brand: "porsche", daily: true, monthy: true, weeky: true, img: "assets/images/cars/porsche/porsche-macan.jpg" },
      {id:132, name: "porsche-panamera", brand: "porsche", daily: true, monthy: false, weeky: false, img: "assets/images/cars/porsche/porsche-panamera.jpg" },
    ]

    this.kia=[
      {id:133, name: "kia-cerato", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-cerato.jpg" },
      {id:134, name: "kia-sorento", brand: "kia", daily: false, monthy: true, weeky: true, img: "assets/images/cars/kia/kia-sorento.jpg" },
      {id:135, name: "optima", brand: "kia", daily: true, monthy: false, weeky: false, img: "assets/images/cars/kia/optima.jpg" },
      {id:136, name: "sportage", brand: "kia", daily: true, monthy: true, weeky: false, img: "assets/images/cars/kia/sportage.jpg" },

    ]
  }






  ngOnInit(): void {

    this.setTitle('خانه / کارنتال')

    if (localStorage.getItem("isLogin") === "false") {
      // console.log('fuckkkkkk');

    }

    setTimeout(() => {

      Swal.fire({
        title: 'سلام',
        text: 'این یک وب سایت دمو است، خوشحال میشم یک نگاه کوتاه به این وب سایت بندازید و نظر خودتون رو در دایرکت من بفرستید',
        icon: 'success',
        confirmButtonText: '!باشه'
      })

  }, 5000)

   
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  gotoreserve(item){
    this.router.navigate(['/cars'],{queryParams:{id:item.id}})
  }

}
