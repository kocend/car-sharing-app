import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDesktopComponent } from './loan-desktop.component';

describe('LoanDesktopComponent', () => {
  let component: LoanDesktopComponent;
  let fixture: ComponentFixture<LoanDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
