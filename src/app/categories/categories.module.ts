import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component'; // Import the CategoriesComponent
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent], // Declare CategoriesComponent here
  imports: [
    CommonModule,
    CategoriesRoutingModule // Keep your routing module as it is, or add routes directly if you prefer
  ]
})
export class CategoriesModule { }
