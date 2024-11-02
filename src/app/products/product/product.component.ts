import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['productId'];
      this.loading = true;

      this.productService.getProductById(id).subscribe((result) => {
        this.product = { ...result, id: id };
        this.loading = false;
      });
    });
  }
}
