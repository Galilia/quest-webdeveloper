import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightViewComponent } from './flight-view/flight-view.component';
import {HttpClientModule} from '@angular/common/http';
import {DurationPipe} from './pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    FlightsListComponent,
    FlightViewComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
