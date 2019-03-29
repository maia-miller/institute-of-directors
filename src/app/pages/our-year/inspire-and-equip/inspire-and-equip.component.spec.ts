import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireAndEquipComponent } from './inspire-and-equip.component';

describe('InspireAndEquipComponent', () => {
  let component: InspireAndEquipComponent;
  let fixture: ComponentFixture<InspireAndEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireAndEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireAndEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
