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
  electronics: any[] = [];
  jewellery: any[] = [];
  isLoading: boolean = true;
  isLoadingElectronics: boolean = true;
  isLoadingJewellery: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchCategoryElectronics();
    this.fetchCategoryJewellery();
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

  fetchCategoryElectronics(): void {
    const apiUrl = 'https://fakestoreapi.com/products/category/electronics';
  
    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        this.electronics = response;
        this.isLoadingElectronics = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch electronics category.';
        this.isLoadingElectronics = false;
      },
    });
  }
  
  fetchCategoryJewellery(): void {
    const apiUrl = 'https://fakestoreapi.com/products/category/jewelery';
  
    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        this.jewellery = response;
        this.isLoadingJewellery = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch jewellery category.';
        this.isLoadingJewellery = false;
      },
    });
  }
  

  // Fetch products by category
  // fetchProductsByCategory(category: string): void {
  //   const apiUrl = `https://fakestoreapi.com/products/category/electronics`;
  //   this.http.get<any[]>(apiUrl).subscribe({
  //     next: (response) => {
  //       if (category === 'electronics') {
  //         this.electronics = response;
  //         this.isLoadingElectronics = false;
  //       },
  //       error: (err: any) => {
  //         this.error = 'Failed to fetch categories.';
  //         this.isLoading = false;
  //       },
  //     },
  //     error: () => {
  //       this.error = `Failed to fetch products for ${category}.`;
  //       if (category === 'electronics') this.isLoadingElectronics = false;
  //       if (category === 'jewelery') this.isLoadingJewellery = false;
  //     }
  //   });
  // }
}
