import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonsService } from './pokemons.service';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    PokemonsService,
  ]
})
export class HomeModule { }
