import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { LocalbusinessComponent } from './localbusiness/localbusiness.component';
import { FactComponent } from './fact/fact.component';
import { AiComponent } from './ai/ai.component';
import { MapComponent } from './map/map.component'; 
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'trips', component: TripsComponent },
  { path: 'local-business', component: LocalbusinessComponent },
  { path: 'fact', component: FactComponent },
  { path: 'ai', component: AiComponent},
  { path: 'map', component: MapComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '**', redirectTo: 'trips' }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
