import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotOfOurYearComponent } from './snapshot-of-our-year.component';

describe('SnapshotOfOurYearComponent', () => {
  let component: SnapshotOfOurYearComponent;
  let fixture: ComponentFixture<SnapshotOfOurYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotOfOurYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotOfOurYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
