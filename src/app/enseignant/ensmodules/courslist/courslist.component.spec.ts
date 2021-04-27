import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourslistComponent } from './courslist.component';

describe('CourslistComponent', () => {
  let component: CourslistComponent;
  let fixture: ComponentFixture<CourslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
