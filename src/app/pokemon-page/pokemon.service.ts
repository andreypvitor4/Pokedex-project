import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  list(idOrName: number | string, query: string = 'pokemon') {
    return this.http.get<any>(`https://pokeapi.co/api/v2/${query}/${idOrName}`).pipe(catchError(this.handlerError))
  }

  handlerError(error:any) {
    return throwError(error.message || 'error')
  }
}
