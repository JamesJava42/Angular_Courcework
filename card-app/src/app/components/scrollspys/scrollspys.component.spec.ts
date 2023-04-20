import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspysComponent } from './scrollspys.component';

describe('ScrollspysComponent', () => {
  let component: ScrollspysComponent;
  let fixture: ComponentFixture<ScrollspysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollspysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollspysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
