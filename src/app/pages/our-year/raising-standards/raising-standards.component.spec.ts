import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisingStandardsComponent } from './raising-standards.component';

describe('RaisingStandardsComponent', () => {
  let component: RaisingStandardsComponent;
  let fixture: ComponentFixture<RaisingStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisingStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisingStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
