import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldmetricsComponent } from './fieldmetrics.component';

describe('FieldmetricsComponent', () => {
  let component: FieldmetricsComponent;
  let fixture: ComponentFixture<FieldmetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldmetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
