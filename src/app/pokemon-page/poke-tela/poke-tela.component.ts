import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-tela',
  templateUrl: './poke-tela.component.html',
  styleUrls: ['./poke-tela.component.css']
})
export class PokeTelaComponent implements OnInit, OnDestroy {

  subscription!: Subscription
  id!: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( (params): any => {
      this.id = params['id']
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
