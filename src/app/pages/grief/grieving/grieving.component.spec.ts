import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievingComponent } from './grieving.component';

describe('GrievingComponent', () => {
  let component: GrievingComponent;
  let fixture: ComponentFixture<GrievingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
