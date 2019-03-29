import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTheCeoComponent } from './from-the-ceo.component';

describe('FromTheCeoComponent', () => {
  let component: FromTheCeoComponent;
  let fixture: ComponentFixture<FromTheCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromTheCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTheCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
