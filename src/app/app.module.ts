import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { PointsListViewComponent } from './components/points-list-view/points-list-view.component';
import { AddPointsViewComponent } from './components/add-points-view/add-points-view.component';

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
  },
  {
    path: '**',
    redirectTo: '/map'
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
