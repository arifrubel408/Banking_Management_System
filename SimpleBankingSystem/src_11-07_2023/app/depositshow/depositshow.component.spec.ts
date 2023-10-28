import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositshowComponent } from './depositshow.component';

describe('DepositshowComponent', () => {
  let component: DepositshowComponent;
  let fixture: ComponentFixture<DepositshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositshowComponent]
    });
    fixture = TestBed.createComponent(DepositshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
