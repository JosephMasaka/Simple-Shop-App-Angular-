import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
})
export class CategoriesComponent implements OnInit {
  categoriesList: string[] = [];
  products: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.categories = params.get('category')!;
      this.fetchCategories();
    });
  }

  fetchCategories(): void {
    const apiUrl = `https://fakestoreapi.com/products/categories`;
    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        this.categoriesList = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch category products.';
        this.isLoading = false;
      },
    });
  }
}
