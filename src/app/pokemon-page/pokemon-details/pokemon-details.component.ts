import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon: any

  constructor() { }

  ngOnInit(): void {
  }

}
