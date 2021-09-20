import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonStatusComponent } from './pokemon-status/pokemon-status.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonPageComponent } from './pokemon-page.component';

@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonDetailsComponent,
    PokemonStatusComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
})
export class PokemonPageModule { }
