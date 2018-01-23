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
  pointsReady = false;
  map: L.Map = null;

  points: Array<Point> = [];

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: L.latLng([ 50.061389, 19.938333 ])
  };

  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.pointsService.getPoints().subscribe(points => {
      this.points = points;
      this.pointsReady = true;
    });
  }

  onMapReady(map: L.Map) {
    this.map = map;
    for (const point of this.points) {
      L.circle([point.latitude, point.longitude], 20, {fill: true})
        .bindPopup('<b> Label: </b>' + point.label + '<br><b>Height: </b>' + point.height + '<br><b>Arm lenght:</b>'
          + point.arm_length).addTo(map);
    }
  }

  rowClicked(point: Point) {
    this.map.setView(new L.LatLng(point.latitude, point.longitude), 15);
  }

}
