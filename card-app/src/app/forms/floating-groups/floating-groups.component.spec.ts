import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingGroupsComponent } from './floating-groups.component';

describe('FloatingGroupsComponent', () => {
  let component: FloatingGroupsComponent;
  let fixture: ComponentFixture<FloatingGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
