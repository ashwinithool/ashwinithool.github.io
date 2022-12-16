import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerUpdateProductRoutingModule } from './seller-update-product-routing.module';
import { SellerUpdateProductComponent } from './seller-update-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerUpdateProductComponent
  ],
  imports: [
    CommonModule,
    SellerUpdateProductRoutingModule,FormsModule
  ]
})
export class SellerUpdateProductModule { }
