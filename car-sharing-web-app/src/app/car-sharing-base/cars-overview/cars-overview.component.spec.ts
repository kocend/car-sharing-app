import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsOverviewComponent } from './cars-overview.component';

describe('CarsOverviewComponent', () => {
  let component: CarsOverviewComponent;
  let fixture: ComponentFixture<CarsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
