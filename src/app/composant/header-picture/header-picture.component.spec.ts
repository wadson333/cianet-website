import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPictureComponent } from './header-picture.component';

describe('HeaderPictureComponent', () => {
  let component: HeaderPictureComponent;
  let fixture: ComponentFixture<HeaderPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
