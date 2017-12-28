import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MapViewComponent} from './components/map-view/map-view.component';
import {PointsListViewComponent} from './components/points-list-view/points-list-view.component';
import {AddPointsViewComponent} from './components/add-points-view/add-points-view.component';
import {PointsService} from './services/points/points.service';

const appRoutes: Routes = [
  {
    path: 'map',
    component: MapViewComponent,
  },
  {
    path: 'points',
    component: PointsListViewComponent,
  },
  {
    path: 'new',
    component: AddPointsViewComponent,
  },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapViewComponent,
    PointsListViewComponent,
    AddPointsViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [
    PointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
