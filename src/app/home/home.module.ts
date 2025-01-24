import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule, 
    RouterModule
  ]
})
export class HomeModule { }
