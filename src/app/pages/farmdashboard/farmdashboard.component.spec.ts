import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmdashboardComponent } from './farmdashboard.component';

describe('FarmdashboardComponent', () => {
  let component: FarmdashboardComponent;
  let fixture: ComponentFixture<FarmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
