import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAriaComponent } from './custom-aria.component';

describe('CustomAriaComponent', () => {
  let component: CustomAriaComponent;
  let fixture: ComponentFixture<CustomAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
