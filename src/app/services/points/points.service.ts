import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Point} from '../../common/point';

@Injectable()
export class PointsService {

  constructor(private http: HttpClient) {}

  getPoints(): Observable<Array<Point>> {
    return this.http.get<Array<Point>>('/api/points');
  }
}
