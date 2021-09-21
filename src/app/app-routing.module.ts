import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbilitiesComponent } from './pokemon-page/abilities/abilities.component';
import { DescriptionComponent } from './pokemon-page/description/description.component';
import { ItemsComponent } from './pokemon-page/items/items.component';
import { MovesComponent } from './pokemon-page/moves/moves.component';
import { PokeTelaComponent } from './pokemon-page/poke-tela/poke-tela.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonPageComponent, children : [
    { path: '', component: PokeTelaComponent },
    { path: 'habilidades', component: AbilitiesComponent },
    { path: 'movimentos', component: MovesComponent },
    { path: 'itens', component: ItemsComponent },
    { path: 'descricao/:description', component: DescriptionComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
