import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { product, signUp } from '../data-type';
import { ProductService } from '../service/product.service';
import { SellerService } from '../service/seller.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts:undefined |product[];
  trendyProducts:undefined | product[]
  
  constructor(private product:ProductService) { 
 
}
  ngOnInit(){
    this.product.popularProducts().subscribe((data)=>{
      console.warn(data)
     this.popularProducts=data;
    });
    this.product.trendyProducts().subscribe((data)=>{
    this.trendyProducts=data;
    })
    }
    
  }

