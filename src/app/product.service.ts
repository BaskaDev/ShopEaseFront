import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from './Product'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8090/productos-ordenados-por-categoria';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Map<string, ProductoModel[]>> {
    // Aquí llamamos al backend para obtener los datos directamente
    return this.http.get<Map<string, ProductoModel[]>>(this.baseUrl);
  }

  private productos: ProductoModel[] = [];

  public saveCart(producto: ProductoModel) {
    this.productos.push(producto);
  }

  public getCart() {
    return this.productos;
  }
}
