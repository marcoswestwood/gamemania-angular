import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgamersComponent } from './pcgamers.component';

describe('PcgamersComponent', () => {
  let component: PcgamersComponent;
  let fixture: ComponentFixture<PcgamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcgamersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
