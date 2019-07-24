import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyeComponent } from './ng-stye.component';

describe('NgStyeComponent', () => {
  let component: NgStyeComponent;
  let fixture: ComponentFixture<NgStyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
