import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SihomeComponent } from './sihome.component';

describe('SihomeComponent', () => {
  let component: SihomeComponent;
  let fixture: ComponentFixture<SihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SihomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
