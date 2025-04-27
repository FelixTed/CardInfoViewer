import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDisplayComponent } from './success-display.component';

describe('SuccessDisplayComponent', () => {
  let component: SuccessDisplayComponent;
  let fixture: ComponentFixture<SuccessDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
