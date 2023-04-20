import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordtionComponent } from './accordtion.component';

describe('AccordtionComponent', () => {
  let component: AccordtionComponent;
  let fixture: ComponentFixture<AccordtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
