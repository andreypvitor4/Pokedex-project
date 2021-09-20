import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
})
export class HomeModule { }
