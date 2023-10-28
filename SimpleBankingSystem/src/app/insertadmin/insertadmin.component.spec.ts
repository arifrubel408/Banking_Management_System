import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertadminComponent } from './insertadmin.component';

describe('InsertadminComponent', () => {
  let component: InsertadminComponent;
  let fixture: ComponentFixture<InsertadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertadminComponent]
    });
    fixture = TestBed.createComponent(InsertadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
