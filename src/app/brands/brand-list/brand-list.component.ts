import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brands.service';
import { Brand } from '../brand.model';

@Component({
  selector: 'brand-list',
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
  providers: [BrandService],
})
export class BrandListComponent implements OnInit {
  brands: Brand[] | undefined;
  selectedBrand: Brand | null | undefined;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  displayAll = true;

  selectBrand(brand?: Brand) {
    if (brand) {
      this.selectedBrand = brand;
      this.displayAll = false;
    } else {
      this.selectedBrand = null;
      this.displayAll = true;
    }
  }
}
