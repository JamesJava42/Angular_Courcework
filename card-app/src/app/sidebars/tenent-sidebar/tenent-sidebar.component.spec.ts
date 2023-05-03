import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentSidebarComponent } from './tenent-sidebar.component';

describe('TenentSidebarComponent', () => {
  let component: TenentSidebarComponent;
  let fixture: ComponentFixture<TenentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenentSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
