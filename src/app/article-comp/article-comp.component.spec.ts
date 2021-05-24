import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCompComponent } from './article-comp.component';

describe('ArticleCompComponent', () => {
  let component: ArticleCompComponent;
  let fixture: ComponentFixture<ArticleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
