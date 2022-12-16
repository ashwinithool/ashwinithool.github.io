import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormGroup } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,NgbCarouselModule,NgIf,NgTemplateOutlet
  ]
})
export class HomeModule { }
