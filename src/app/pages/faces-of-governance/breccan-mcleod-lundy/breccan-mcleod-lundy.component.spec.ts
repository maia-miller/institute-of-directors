import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreccanMcleodLundyComponent } from './breccan-mcleod-lundy.component';

describe('BreccanMcleodLundyComponent', () => {
  let component: BreccanMcleodLundyComponent;
  let fixture: ComponentFixture<BreccanMcleodLundyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreccanMcleodLundyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreccanMcleodLundyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
