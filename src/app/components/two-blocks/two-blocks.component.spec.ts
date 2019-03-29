import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBlocksComponent } from './two-blocks.component';

describe('TwoBlocksComponent', () => {
  let component: TwoBlocksComponent;
  let fixture: ComponentFixture<TwoBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
