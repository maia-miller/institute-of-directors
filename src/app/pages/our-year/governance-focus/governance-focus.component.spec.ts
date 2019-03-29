import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernanceFocusComponent } from './governance-focus.component';

describe('GovernanceFocusComponent', () => {
  let component: GovernanceFocusComponent;
  let fixture: ComponentFixture<GovernanceFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernanceFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernanceFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
