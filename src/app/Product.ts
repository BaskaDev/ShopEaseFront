export interface ProductoModel {
  categoria: string; // Cambiado de id_categoria a categoria
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen_url: string; // Cambiado de image a imagen_url
}