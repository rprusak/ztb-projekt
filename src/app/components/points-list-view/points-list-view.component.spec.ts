import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsListViewComponent } from './points-list-view.component';

describe('PointsListViewComponent', () => {
  let component: PointsListViewComponent;
  let fixture: ComponentFixture<PointsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
