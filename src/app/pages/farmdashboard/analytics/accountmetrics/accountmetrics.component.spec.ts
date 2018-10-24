import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmetricsComponent } from './accountmetrics.component';

describe('AccountmetricsComponent', () => {
  let component: AccountmetricsComponent;
  let fixture: ComponentFixture<AccountmetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
