import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';

import {AppComponent} from './app.component';
import {MapViewComponent} from './components/map-view/map-view.component';
import {PointsService} from './services/points/points.service';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [
    PointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
