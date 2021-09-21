import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit, OnDestroy {

  subscription1!: Subscription
  subscription2!: Subscription

  pokemon!: any

  constructor(private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit(): void {
    this.subscription1 = this.route.params.subscribe( (params): any => {

      this.subscription2 = this.service.list(params['id']).subscribe( data => {
        this.pokemon = data
      })
    })
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }

}
