import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServertemplateComponent } from './servertemplate.component';

describe('ServertemplateComponent', () => {
  let component: ServertemplateComponent;
  let fixture: ComponentFixture<ServertemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServertemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServertemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
