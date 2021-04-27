import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnscourseComponent } from './enscourse.component';

describe('EnscourseComponent', () => {
  let component: EnscourseComponent;
  let fixture: ComponentFixture<EnscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
