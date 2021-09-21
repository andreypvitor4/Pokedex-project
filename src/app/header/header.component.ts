import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars
  menuMobileDisplay = false
  router

  constructor(router: Router) {
    this.router = router
   }

  onToggleMenuMobile(): void {
    this.menuMobileDisplay = !this.menuMobileDisplay
  }

  goToRandomPokemon(): void {
    this.router.navigate([`/pokemon/${Math.floor(Math.random()*898 + 1)}`])
  }

  ngOnInit(): void {
  }

}
