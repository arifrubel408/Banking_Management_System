import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderlistComponent } from './holderlist.component';

describe('HolderlistComponent', () => {
  let component: HolderlistComponent;
  let fixture: ComponentFixture<HolderlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolderlistComponent]
    });
    fixture = TestBed.createComponent(HolderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
