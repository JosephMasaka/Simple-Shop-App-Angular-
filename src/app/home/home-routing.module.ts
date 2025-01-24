import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';

const routes: Routes = [
  { path: '/categories', component: CategoriesComponent }, // Add a route for the categories page
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
