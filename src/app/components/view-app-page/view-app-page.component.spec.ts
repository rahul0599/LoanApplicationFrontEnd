import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppPageComponent } from './view-app-page.component';

describe('ViewAppPageComponent', () => {
  let component: ViewAppPageComponent;
  let fixture: ComponentFixture<ViewAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
