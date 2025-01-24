# Angular E-Commerce Categories Application

This project is a simple Angular-based application that demonstrates the ability to build a modular and scalable system with routing, lazy loading, and HTTP integration for fetching category data. The application adheres to high standards of code quality, testability, and maintainability.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Approach](#approach)
3. [Setup](#setup)
4. [Running the Application](#running-the-application)
5. [Testing](#testing)
6. [Features](#features)
7. [Code Quality Practices](#code-quality-practices)
8. [Future Enhancements](#future-enhancements)

---

## Project Overview

The application consists of the following key components:
- **Home Page**: Displays a landing page with a link to view all product categories.
- **Categories Page**: Fetches and displays product categories from an API (`https://fakestoreapi.com`).

The system implements:
- **Lazy Loading**: Modules are loaded only when required to improve performance.
- **Routing**: Seamless navigation between pages.
- **HTTP Integration**: Fetch data dynamically using Angular's `HttpClient`.

---

## Approach
Problem-Solving Methodology
Modular Architecture:

The application was structured with modularity in mind. Each feature is encapsulated in its own module (e.g., CategoriesModule), ensuring scalability and maintainability.
Core functionality, such as routing and HTTP requests, is separated into services and modules to keep components focused on UI rendering.
Routing and Lazy Loading:

Angular's RouterModule is used to define application routes.
Lazy loading was implemented for the CategoriesModule to optimize initial load time by only loading the module when the user navigates to /categories.
API Integration:

Categories data is fetched dynamically from the https://fakestoreapi.com API using Angular's HttpClient.
The data-fetching logic is abstracted into a service (CategoriesService), promoting reusability and testability.
Error Handling:

The application includes basic error handling to display user-friendly messages in case of failed API requests.
A loading state is managed to enhance the user experience during data fetching.
Code Quality:

Followed Angular's style guide and best practices for naming conventions, folder structure, and modular design.
Adhered to the Single Responsibility Principle (SRP) by ensuring each component, service, and module serves a single purpose.
Testable Code:

Components and services are designed with testability in mind, leveraging Angular's testing utilities (TestBed) and mocking techniques for external dependencies.

### Problem-Solving Approach
1. **Architecture**: Designed the application with modularity in mind. Used feature modules to keep code organized and maintainable.
2. **Routing**: Integrated Angular Router for navigation between components. Lazy loading is used for the `CategoriesModule` to optimize initial load time.
3. **HTTP Integration**: Used Angular's `HttpClient` to fetch categories data from the API endpoint.
4. **Code Quality**: Ensured adherence to best practices like single-responsibility, DRY (Don't Repeat Yourself), and clear separation of concerns.

### Key Considerations
- **Scalability**: The application is designed to easily scale with additional features.
- **Testability**: Code is modular, allowing unit and integration testing with minimal configuration.

---

### Testing
Testing Approach
The application employs Angular's default testing framework with Jasmine and Karma for unit and integration testing. The following approaches were used to ensure the application works as expected:

Unit Testing:

Each component and service is tested in isolation.
Jasmine spies are used to mock HTTP calls and observe service behavior.
Integration Testing:

Verified interactions between components and services.
Confirmed routing behavior, ensuring lazy-loaded modules function correctly.
Mocking:

Mocked API responses for the CategoriesService using Jasmine.
Ensured components render correctly with simulated API data.
Error Cases:

Tested how the application behaves in scenarios such as failed API requests or missing routes.


## Setup

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16+ recommended)
- **Angular CLI** (v15+)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
