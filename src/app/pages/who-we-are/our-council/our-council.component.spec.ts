import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCouncilComponent } from './our-council.component';

describe('OurCouncilComponent', () => {
  let component: OurCouncilComponent;
  let fixture: ComponentFixture<OurCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
