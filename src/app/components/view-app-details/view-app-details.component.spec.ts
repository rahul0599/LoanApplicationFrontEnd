import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppDetailsComponent } from './view-app-details.component';

describe('ViewAppDetailsComponent', () => {
  let component: ViewAppDetailsComponent;
  let fixture: ComponentFixture<ViewAppDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
