import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoModel } from './Product'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Descomentar y establecer la URL cuando estés listo para usar la API
  // private baseUrl = 'http://localhost:8080/api/products'; 

  constructor(private http: HttpClient) {}

  private productos : ProductoModel[] = [];


  getProducts(): Observable<ProductoModel[]> {
    // Datos "quemados" (hardcoded) en formato JSON que proporcionaste
    const jsonData = {
      "Frutas": [
    {
      "nombre": "Papaya",
      "descripcion": "Fruta anaranjada",
      "precio": 2500,
      "stock": 150,
      "id_categoria": 5,
      "imagen_url": "imagen1"
    },
    {
      "nombre": "Banano",
      "descripcion": "Fruta amarilla",
      "precio": 500,
      "stock": 550,
      "id_categoria": 5,
      "imagen_url": "string"
    },
    {
      "nombre": "Manzana",
      "descripcion": "Fruta roja o verde",
      "precio": 3000,
      "stock": 200,
      "id_categoria": 5,
      "imagen_url": "string"
    },
    {
      "nombre": "Fresa",
      "descripcion": "Fruta pequeña y dulce",
      "precio": 4000,
      "stock": 180,
      "id_categoria": 5,
      "imagen_url": "string"
    },
    {
      "nombre": "Naranja",
      "descripcion": "Fruta cítrica",
      "precio": 1800,
      "stock": 300,
      "id_categoria": 5,
      "imagen_url": "string"
    },
    {
      "nombre": "Mango",
      "descripcion": "Fruta tropical dulce",
      "precio": 3500,
      "stock": 120,
      "id_categoria": 5,
      "imagen_url": "string"
    }
  ],
  "Otras cositas": [
    {
      "nombre": "Suavitel",
      "descripcion": "Suavizante para ropa",
      "precio": 0,
      "stock": 0,
      "id_categoria": 2,
      "imagen_url": "string"
    },
    {
      "nombre": "CocaCola",
      "descripcion": "Bebida gaseosa",
      "precio": 4500,
      "stock": 450,
      "id_categoria": 2,
      "imagen_url": "string"
    },
    {
      "nombre": "Tamal",
      "descripcion": "Alimento masudo",
      "precio": 5500,
      "stock": 150,
      "id_categoria": 2,
      "imagen_url": "string"
    },
    {
      "nombre": "Galletas",
      "descripcion": "Snacks dulces",
      "precio": 2500,
      "stock": 300,
      "id_categoria": 2,
      "imagen_url": "string"
    },
    {
      "nombre": "Leche",
      "descripcion": "Bebida láctea",
      "precio": 3500,
      "stock": 200,
      "id_categoria": 2,
      "imagen_url": "string"
    },
    {
      "nombre": "Cereal",
      "descripcion": "Desayuno nutritivo",
      "precio": 4000,
      "stock": 120,
      "id_categoria": 2,
      "imagen_url": "string"
    }
  ]
    };

    // Convertir el JSON en un array de productos
    const products: ProductoModel[] = this.flattenProducts(jsonData);

    // Retornar los datos "quemados" como un Observable
    return of(products);

    // Cuando estés listo para usar la API, descomenta la siguiente línea
    // return this.http.get<Product[]>(`${this.baseUrl}/traerProductos`);
  }

  public saveCart(producto: ProductoModel){
    this.productos.push(producto)
  }


  public getCart(){
    return this.productos;
  }

  private flattenProducts(jsonData: { [key: string]: any[] }): ProductoModel[] {
    const products: ProductoModel[] = [];

    for (const category in jsonData) {
      const items = jsonData[category];
      for (const item of items) {
        products.push({
          categoria: category, // Asignar el nombre de la categoría
          nombre: item.nombre,
          descripcion: item.descripcion,
          precio: item.precio,
          stock: item.stock,
          imagen_url: item.imagen_url // Cambiado de image a imagen_url
        });
      }
    }
    return products;
  }
}