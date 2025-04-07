import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = '';
  weather: any = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.error = '';
    this.weather = null;

    this.http.get(`http://localhost:8091/weather?city=${encodeURIComponent(this.city)}`)
      .subscribe({
        next: (res: any) => {
          this.weather = res;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error?.error || 'Failed to get weather data';
          this.loading = false;
        }
      });
  }

  getWeatherDescription(): string {
    return this.weather?.weather?.[0]?.description || 'Unknown weather condition';
  }
}