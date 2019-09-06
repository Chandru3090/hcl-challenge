import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchCitiesComponent } from './search-cities/search-cities.component';
import { ViewCitiesWithLatitudeandlogitudeComponent } from './view-cities-with-latitudeandlogitude/view-cities-with-latitudeandlogitude.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchCitiesComponent,

    ViewCitiesWithLatitudeandlogitudeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
