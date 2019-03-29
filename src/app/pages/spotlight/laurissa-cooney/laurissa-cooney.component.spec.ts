import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurissaCooneyComponent } from './laurissa-cooney.component';

describe('LaurissaCooneyComponent', () => {
  let component: LaurissaCooneyComponent;
  let fixture: ComponentFixture<LaurissaCooneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaurissaCooneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaurissaCooneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
