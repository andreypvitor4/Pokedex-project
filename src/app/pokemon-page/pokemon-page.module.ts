import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonStatusComponent } from './pokemon-status/pokemon-status.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonPageComponent } from './pokemon-page.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { MovesComponent } from './moves/moves.component';
import { PokeTelaComponent } from './poke-tela/poke-tela.component';
import { PokemonService } from './pokemon.service';
import { DescriptionComponent } from './description/description.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonDetailsComponent,
    PokemonStatusComponent,
    AbilitiesComponent,
    MovesComponent,
    PokeTelaComponent,
    DescriptionComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService
  ],
})
export class PokemonPageModule { }
