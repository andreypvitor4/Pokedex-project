import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pokemons: any = []

  constructor(private service: PokemonsService) { }

  onScrollDown(): void {
    let offset = this.pokemons.length
    this.service.list(offset).then(observables => 
      observables.map(elem => 
        elem.subscribe(data => this.pokemons.push(data))))
  }

  ngOnInit(): void {
    this.service.list().then(promises => promises.map(elem => elem.subscribe(data => this.pokemons.push(data))))
  }

}
