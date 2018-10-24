import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfieldsComponent } from './viewfields.component';

describe('ViewfieldsComponent', () => {
  let component: ViewfieldsComponent;
  let fixture: ComponentFixture<ViewfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
