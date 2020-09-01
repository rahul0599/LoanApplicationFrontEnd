import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAppPageComponent } from './submit-app-page.component';

describe('SubmitAppPageComponent', () => {
  let component: SubmitAppPageComponent;
  let fixture: ComponentFixture<SubmitAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
