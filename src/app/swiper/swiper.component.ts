import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  template:`
  
`,
  styleUrls: ['./swiper.component.sass']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
