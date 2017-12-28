import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {Point} from '../../common/point';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  points: Array<Point> = [];


  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points;
    });
  }

}
