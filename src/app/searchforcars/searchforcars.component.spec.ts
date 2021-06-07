import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforcarsComponent } from './searchforcars.component';

describe('SearchforcarsComponent', () => {
  let component: SearchforcarsComponent;
  let fixture: ComponentFixture<SearchforcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchforcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
