import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreEnablersComponent } from './core-enablers.component';

describe('CoreEnablersComponent', () => {
  let component: CoreEnablersComponent;
  let fixture: ComponentFixture<CoreEnablersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreEnablersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreEnablersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
