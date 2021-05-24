import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-comp',
  templateUrl: './article-comp.component.html',
  styleUrls: ['./article-comp.component.sass']
})
export class ArticleCompComponent implements OnInit {
  name;
  constructor(private route: ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
