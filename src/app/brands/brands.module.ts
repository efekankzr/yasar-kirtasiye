import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminGuard } from '../authentication/admin.guard';
import { BrandListComponent } from './brand-list/brand-list.component';

@NgModule({
  declarations: [BrandListComponent, BrandCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,
    RouterModule.forChild([
      {
        path: 'brands/create',
        component: BrandCreateComponent,
        canActivate: [AdminGuard],
      },
    ]),
  ],
})
export class BrandsModule {}
