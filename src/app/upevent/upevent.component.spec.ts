import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpeventComponent } from './upevent.component';

describe('UpeventComponent', () => {
  let component: UpeventComponent;
  let fixture: ComponentFixture<UpeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
