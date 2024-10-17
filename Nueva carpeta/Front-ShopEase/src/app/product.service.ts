import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private baseUrl = 'http://localhost:8080/api/products'; // Comentado por ahora

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // Datos "quemados" (hardcoded)
    const products: Product[] = [
      {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        price: 10.99,
        stock: 100,
        image: 'https://via.placeholder.com/50',
        category: 'Categoría 1'
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.99,
        stock: 50,
        image: 'https://via.placeholder.com/50',
        category: 'Categoría 2'
      },
      {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del Producto 3',
        price: 15.99,
        stock: 75,
        image: 'https://via.placeholder.com/50',
        category: 'Categoría 1'
      },
      {
        id: 4,
        name: 'Producto 4',
        description: 'Descripción del Producto 4',
        price: 8.99,
        stock: 200,
        image: 'https://via.placeholder.com/50',
        category: 'Categoría 3'
      }
    ];

    // Retornar los datos "quemados" como un Observable
    return of(products);

    // Cuando estés listo para usar la API, descomenta la siguiente línea
    // return this.http.get<Product[]>(`${this.baseUrl}/traerProductos`);
  }
}
