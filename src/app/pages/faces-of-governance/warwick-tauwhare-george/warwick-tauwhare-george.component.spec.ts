import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarwickTauwhareGeorgeComponent } from './warwick-tauwhare-george.component';

describe('WarwickTauwhareGeorgeComponent', () => {
  let component: WarwickTauwhareGeorgeComponent;
  let fixture: ComponentFixture<WarwickTauwhareGeorgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarwickTauwhareGeorgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarwickTauwhareGeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
