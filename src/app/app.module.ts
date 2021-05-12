import { NgModule } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { ReactiveFormsModule,FormBuilder } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './swiper/swiper.component';
import { TrueStrPipe } from './true-str.pipe';
// import {SwiperComponent} from './home/swiper/swiper.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SwiperComponent,
    TrueStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
