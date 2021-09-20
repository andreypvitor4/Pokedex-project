import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
