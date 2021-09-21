import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  pokemons: any = []
  subscription!: Subscription
  showFirstPokemons = false

  constructor(private service: PokemonsService) { }

  onScrollDown(): void {
    let offset = this.pokemons.length
    this.service.list(offset).map(obs => 
      obs.subscribe(data => this.pokemons.push(data))
    )

    this.asynchronousPokemonsSort( offset + 20 )
  }

  asynchronousPokemonsSort( max: number = 0) {
    setTimeout(() => {
      if(this.pokemons.length >= max) {
        this.showFirstPokemons = true
        this.pokemons.sort( (a: any, b:any) => {
          return a.id - b.id
        })
      }else {
        this.asynchronousPokemonsSort(max)
      }
    }, 50)
  }

  ngOnInit(): void {
    this.service.list().map(obs => 
      this.subscription = obs.subscribe(data => 
        this.pokemons.push(data)
      )
    )
    this.asynchronousPokemonsSort( 20 )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
