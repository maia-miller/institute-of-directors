import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaAntonioComponent } from './mena-antonio.component';

describe('MenaAntonioComponent', () => {
  let component: MenaAntonioComponent;
  let fixture: ComponentFixture<MenaAntonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenaAntonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenaAntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
