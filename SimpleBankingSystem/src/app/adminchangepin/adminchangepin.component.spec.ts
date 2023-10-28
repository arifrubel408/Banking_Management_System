import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchangepinComponent } from './adminchangepin.component';

describe('AdminchangepinComponent', () => {
  let component: AdminchangepinComponent;
  let fixture: ComponentFixture<AdminchangepinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminchangepinComponent]
    });
    fixture = TestBed.createComponent(AdminchangepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
