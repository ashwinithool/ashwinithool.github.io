import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerHomeRoutingModule } from './seller-home-routing.module';
import { SellerHomeComponent } from './seller-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SellerHomeComponent
  ],
  imports: [
    CommonModule,
    SellerHomeRoutingModule,FontAwesomeModule
  ]
})
export class SellerHomeModule { }
