import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicheleFreyComponent } from './michele-frey.component';

describe('MicheleFreyComponent', () => {
  let component: MicheleFreyComponent;
  let fixture: ComponentFixture<MicheleFreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicheleFreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicheleFreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
