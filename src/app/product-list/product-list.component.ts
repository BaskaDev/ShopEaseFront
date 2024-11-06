import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductoModel } from '../Product'; // Asegúrate de que la ruta sea correcta
import { ProductService } from '../product.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-productos',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ]
})
export class ProductosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'precio', 'descripcion', 'imagen', 'action'];
  dataSource = new MatTableDataSource<ProductoModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  categorias: string[] = [];
  productosMap = new Map<string, ProductoModel[]>(); // Map para productos agrupados por categoría
  selectedCategory: string = '';

  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      // Guardar los productos agrupados por categoría en el Map
      this.productosMap = data;

      // Obtener las categorías únicas del Map
      this.categorias = Array.from(this.productosMap.keys());

      // Convertir el Map en un array plano de productos para inicializar el dataSource
      this.dataSource.data = Array.from(this.productosMap.values()).flat();
    }, error => {
      console.error('Error al obtener productos:', error);
    });
  }

  ngAfterViewInit() {
    // Asegúrate de que el paginador se establezca después de que la vista se haya inicializado
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  onCategoryChange(event: MatSelectChange): void {
    const category = event.value;
    if (category) {
      // Filtrar productos de la categoría seleccionada
      this.dataSource.data = this.productosMap.get(category) || [];
    } else {
      // Mostrar todos los productos si no se selecciona ninguna categoría
      this.dataSource.data = Array.from(this.productosMap.values()).flat();
    }
    
    if (this.paginator) {
      this.paginator.firstPage(); // Regresar a la primera página al filtrar
    }
  }

  addToCart(product: ProductoModel): void {
    console.log(`${product.nombre} añadido al carrito`);
    this.productService.saveCart(product);
  }

  finalizarCompra(): void {
    console.log('Compra finalizada');
    this.route.navigate(['payment']);
  }
}


