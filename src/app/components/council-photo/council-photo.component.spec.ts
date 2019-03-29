import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilPhotoComponent } from './council-photo.component';

describe('CouncilPhotoComponent', () => {
  let component: CouncilPhotoComponent;
  let fixture: ComponentFixture<CouncilPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
