import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  id!: string
  subscription!: Subscription
  pokemon!: any

  constructor(private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( (params): any => {
      this.id = params['id']

      this.service.list(params['id']).subscribe( data => {
        this.pokemon = data
      })
    })

    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
