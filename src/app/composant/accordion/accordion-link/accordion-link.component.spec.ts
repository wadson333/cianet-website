import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLinkComponent } from './accordion-link.component';

describe('AccordionLinkComponent', () => {
  let component: AccordionLinkComponent;
  let fixture: ComponentFixture<AccordionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
