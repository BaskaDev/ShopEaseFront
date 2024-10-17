  import { Component, OnInit, ViewChild } from '@angular/core';
  import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
  import { MatTableDataSource, MatTableModule } from '@angular/material/table';
  import { ProductService } from '../product.service';
  import { Product } from '../Product';
  import { BrowserModule } from '@angular/platform-browser';
  import { MatButtonModule } from '@angular/material/button';
  import { HttpClient, HttpClientModule } from '@angular/common/http';
  import {MatTabsModule} from '@angular/material/tabs';
import { MatCard, MatCardModule } from '@angular/material/card';


  @Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    imports: [MatCardModule, MatTableModule, MatPaginatorModule,  MatButtonModule, MatTabsModule],
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'description', 'price', 'stock', 'category', 'image', 'addToCart'];
    dataSource = new MatTableDataSource<Product>();
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private productService: ProductService, private httpClient: HttpClient) {}

    finalizarCompra(): void {}


    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(): void {
      this.productService.getProducts().subscribe(
        (response) => {
          this.dataSource.data = response;
          this.dataSource.paginator = this.paginator;
        },
        (error) => console.error(error)
      );
    }

    addToCart(product: Product): void {
      // Aquí puedes manejar la lógica para agregar al carrito, como invocar un servicio o guardar en el estado.
      console.log('Producto agregado al carrito:', product);
    }
  }
