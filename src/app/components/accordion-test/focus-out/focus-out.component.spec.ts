import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusOutComponent } from './focus-out.component';

describe('FocusOutComponent', () => {
  let component: FocusOutComponent;
  let fixture: ComponentFixture<FocusOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
