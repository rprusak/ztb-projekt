import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../services/points/points.service';
import {Point} from '../../common/point';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  points: Array<Point> = [];

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: L.latLng([ 50.061389, 19.938333 ])
  };
  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points;
    });
  }

}
