import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDetailsService } from './../../services/flight-details.service';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  whereFrom = this.fromData.whereFrom;
  whereTo = this.fromData.whereTo;
  temp: any;
  temp2: any;

  constructor(
    public fromData: FlightDetailsService,
  ) { }

  ngOnInit():void { 
    this.getDataFrom(),
    this.getDataTo()
    
  }

  getDataFrom() {
    console.log(this.whereFrom)
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.whereFrom}&lat=0&lon=0&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "fd24308667msh74f222378278111p189b4bjsn05c4165eff99",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.temp = Math.floor((data.main.temp)-273.15)
        document.querySelector('#temp').innerHTML = this.temp + '&deg C';
        document.querySelector('#humidity').innerHTML = data.main.humidity;
        document.querySelector('#pressure').innerHTML = data.main.pressure;
        document.querySelector('#clouds').innerHTML = data.weather[0].description;

      })
      .catch(err => {
        console.error(err);
      });

  }
  getDataTo() {
    console.log(this.whereTo)
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.whereTo}&lat=0&lon=0&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "fd24308667msh74f222378278111p189b4bjsn05c4165eff99",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.temp2 = Math.floor((data.main.temp)-273.15)
        document.querySelector('#temp2').innerHTML = this.temp2 + '&deg C';
        document.querySelector('#humidity2').innerHTML = data.main.humidity;
        document.querySelector('#pressure2').innerHTML = data.main.pressure;
        document.querySelector('#clouds2').innerHTML = data.weather[0].description;

      })
      .catch(err => {
        console.error(err);
      });

  }
}