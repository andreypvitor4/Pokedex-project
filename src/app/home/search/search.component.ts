import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemon!: any
  showError = false
  faSearch = faSearch

  constructor(private service: PokemonsService, private route: Router) { }

  onSubmit(form: any) {

      this.service.getPokemon(form.value.search.toLowerCase()).subscribe( data => {
        this.pokemon = data

        if(!!data.name) {
          this.route.navigate([`/pokemon/${form.value.search.toLowerCase()}`])
        }

      }, () => {
        this.showError = true
        setTimeout( () => {
          this.showError = false
        }, 3000)
      })
  }


  ngOnInit(): void {
  }

}
