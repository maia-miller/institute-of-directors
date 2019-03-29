import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBranchNetworkComponent } from './our-branch-network.component';

describe('OurBranchNetworkComponent', () => {
  let component: OurBranchNetworkComponent;
  let fixture: ComponentFixture<OurBranchNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBranchNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBranchNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
