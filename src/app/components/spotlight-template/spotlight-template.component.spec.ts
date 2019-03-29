import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightTemplateComponent } from './spotlight-template.component';

describe('SpotlightTemplateComponent', () => {
  let component: SpotlightTemplateComponent;
  let fixture: ComponentFixture<SpotlightTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
