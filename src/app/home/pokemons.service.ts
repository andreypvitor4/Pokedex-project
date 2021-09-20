import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  constructor(private http: HttpClient) { }

  list() {
    let pokemons = []
    for(let i = 1; i <= 20; i++) {
      pokemons.push(this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    return Promise.all(pokemons)
  }
}
