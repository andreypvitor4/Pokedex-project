import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars
  menuMobileDisplay = false

  constructor() { }

  onToggleMenuMobile(): void {
    this.menuMobileDisplay = !this.menuMobileDisplay
  }

  ngOnInit(): void {
  }

}
