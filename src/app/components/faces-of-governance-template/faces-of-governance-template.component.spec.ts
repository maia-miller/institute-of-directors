import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesOfGovernanceTemplateComponent } from './faces-of-governance-template.component';

describe('FacesOfGovernanceTemplateComponent', () => {
  let component: FacesOfGovernanceTemplateComponent;
  let fixture: ComponentFixture<FacesOfGovernanceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesOfGovernanceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesOfGovernanceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
