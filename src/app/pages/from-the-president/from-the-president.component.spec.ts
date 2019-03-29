import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromThePresidentComponent } from './from-the-president.component';

describe('FromThePresidentComponent', () => {
  let component: FromThePresidentComponent;
  let fixture: ComponentFixture<FromThePresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromThePresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromThePresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
