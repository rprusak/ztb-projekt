import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointsViewComponent } from './add-points-view.component';

describe('AddPointsViewComponent', () => {
  let component: AddPointsViewComponent;
  let fixture: ComponentFixture<AddPointsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPointsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPointsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
