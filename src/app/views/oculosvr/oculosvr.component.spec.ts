import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculosvrComponent } from './oculosvr.component';

describe('OculosvrComponent', () => {
  let component: OculosvrComponent;
  let fixture: ComponentFixture<OculosvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OculosvrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OculosvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
