import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamaritansComponent } from './samaritans.component';

describe('SamaritansComponent', () => {
  let component: SamaritansComponent;
  let fixture: ComponentFixture<SamaritansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamaritansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamaritansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
