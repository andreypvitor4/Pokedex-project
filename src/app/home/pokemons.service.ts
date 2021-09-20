import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  constructor(private http: HttpClient) { }

  list(offset: number = 0, limit: number = 20) {
    let pokemons = []
    for(let i = offset + 1; i <= offset + limit; i++) {
      pokemons.push(this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    return Promise.all(pokemons)
  }
}
