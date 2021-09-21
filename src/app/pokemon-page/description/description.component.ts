import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {

  subscription1!: Subscription
  subscription2!: Subscription

  type!: string
  moveOrAbility!: any

  constructor(private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit(): void {
    this.subscription1 = this.route.params.subscribe( (params): any => {
      this.type = params.type

      this.subscription2 = this.service.list(params.description, params.type).subscribe( data => {
        this.moveOrAbility = data
      })
    })
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }

}
