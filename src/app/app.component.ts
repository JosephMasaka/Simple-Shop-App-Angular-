import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component'; // Import HomePageComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, RouterLink, RouterLinkActive], // Add HomePageComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fix typo: 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'Simple-Shop-App-Angular';
}
