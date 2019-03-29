import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonBerryComponent } from './simon-berry.component';

describe('SimonBerryComponent', () => {
  let component: SimonBerryComponent;
  let fixture: ComponentFixture<SimonBerryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonBerryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonBerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
