import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  isCategoryListVisible: boolean = true;
  isSmallScreen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loading = true;

      this.productService
        .getProducts(params['categoryId'])
        .subscribe((data) => {
          this.products = data;
          this.loading = false;
        });
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
    this.isCategoryListVisible = !this.isSmallScreen;
  }

  toggleCategoryList(): void {
    this.isCategoryListVisible = !this.isCategoryListVisible;
  }
}
