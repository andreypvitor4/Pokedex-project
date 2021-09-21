import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-status',
  templateUrl: './pokemon-status.component.html',
  styleUrls: ['./pokemon-status.component.css']
})
export class PokemonStatusComponent implements OnInit {

  @Input() stats: any
  @Input() baseExp!: string

  constructor() { }

  ngOnInit(): void {
  }

}
