import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core'
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WcagComponent } from './components/wcag/wcag.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { SeatReservationComponent } from './components/seat-reservation/seat-reservation.component';
import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { SafetyComponent } from './components/safety/safety.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WcagComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    FlightDetailsComponent,
    SeatReservationComponent,
    LoginComponent,
    WeatherComponent,
    CinemaComponent,
    SafetyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({  
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
