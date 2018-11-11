import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAjaxComponent } from './view-ajax.component';

describe('ViewAjaxComponent', () => {
  let component: ViewAjaxComponent;
  let fixture: ComponentFixture<ViewAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
