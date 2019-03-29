import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildEngagementComponent } from './build-engagement.component';

describe('BuildEngagementComponent', () => {
  let component: BuildEngagementComponent;
  let fixture: ComponentFixture<BuildEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
