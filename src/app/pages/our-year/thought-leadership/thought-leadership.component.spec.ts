import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtLeadershipComponent } from './thought-leadership.component';

describe('ThoughtLeadershipComponent', () => {
  let component: ThoughtLeadershipComponent;
  let fixture: ComponentFixture<ThoughtLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
