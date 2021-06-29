import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCompComponent } from './article-comp/article-comp.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchforcarsComponent } from './searchforcars/searchforcars.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleCompComponent },
  { path: 'custom', component: SearchforcarsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: "404_not_found" },
  { path: '404_not_found', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
