import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';


export const routes: Routes = [
     { path: '', component: HomePageComponent }, // Default route
      { path: 'categories', component: CategoriesComponent }, // Categories route
      { path: '**', redirectTo: '', pathMatch: 'full' }, 
];
