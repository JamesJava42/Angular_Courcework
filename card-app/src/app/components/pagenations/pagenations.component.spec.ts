import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenationsComponent } from './pagenations.component';

describe('PagenationsComponent', () => {
  let component: PagenationsComponent;
  let fixture: ComponentFixture<PagenationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
