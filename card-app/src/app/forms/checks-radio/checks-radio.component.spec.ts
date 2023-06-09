import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksRadioComponent } from './checks-radio.component';

describe('ChecksRadioComponent', () => {
  let component: ChecksRadioComponent;
  let fixture: ComponentFixture<ChecksRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
