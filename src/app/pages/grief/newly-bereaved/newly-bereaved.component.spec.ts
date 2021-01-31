import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyBereavedComponent } from './newly-bereaved.component';

describe('NewlyBereavedComponent', () => {
  let component: NewlyBereavedComponent;
  let fixture: ComponentFixture<NewlyBereavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyBereavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyBereavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
