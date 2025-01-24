import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: '<h1>Categories Page</h1>',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  category!: string;
  products: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category')!;
      this.fetchCategories();
    });
  }

  fetchCategories(): void {
    const apiUrl = `https://fakestoreapi.com/products/categories`;
    this.http.get<any[]>(apiUrl).subscribe({
      next: (response) => {
        this.products = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch category products.';
        this.isLoading = false;
      },
    });
  }
}
