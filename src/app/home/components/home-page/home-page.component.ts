import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
// import { SwiperModule } from 'swiper/angular'; // Import SwiperModule from v9
// import SwiperCore, { Navigation, Pagination } from 'swiper'; // Import Swiper Core and modules

// SwiperCore.use([Navigation, Pagination]); // Use the required Swiper modules

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Use HttpClientModule instead of HttpClient
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  categories: string[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    const apiUrl = 'https://fakestoreapi.com/products/categories';

    this.http.get<string[]>(apiUrl).subscribe({
      next: (response: string[]) => {
        this.categories = response;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to fetch categories.';
        this.isLoading = false;
      },
    });
  }
}
