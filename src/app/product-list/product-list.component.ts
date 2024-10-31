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

  displayedColumns: string[] = ['nombre', 'precio', 'descripcion','imagen','action'];
  dataSource = new MatTableDataSource<ProductoModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;


  categorias: string[] = [];
  productos: ProductoModel[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService
    , private route: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.productos = data;
      this.dataSource.data = this.productos;
      this.categorias = [...new Set(this.productos.map(p => p.categoria))];
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
    this.dataSource.data = category ? this.productos.filter(p => p.categoria === category) : this.productos;
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