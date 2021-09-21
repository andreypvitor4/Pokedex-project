import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  constructor(private http: HttpClient) { }

  list(offset: number = 0, limit: number = 20) {
    let pokemons = []
    for(let i = offset + 1; i <= offset + limit; i++) {
      pokemons.push(this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}`).pipe(catchError(this.handlerError)))
    }

    return pokemons
  }

  getPokemon(idOrName: number | string, query: string = 'pokemon') {
    return this.http.get<any>(`https://pokeapi.co/api/v2/${query}/${idOrName}`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any) {
    return throwError(error.message || 'error')
  }
}
