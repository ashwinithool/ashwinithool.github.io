import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]

  productMessage:undefined | string;

 icon=faTrash
 editIcon=faEdit;

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((result)=>{
     console.warn(result);
      if(result){
   this.productList=result;
      }
    })
  }
  deleteProduct(id:number){
    console.warn("test id",id)
//
   this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is deleted";
        this.list()
      }
 })
      
        
        
   
  setTimeout(()=>{
   this.productMessage=undefined
   },3000);
  
}
list(){
  this.product.productList().subscribe((result)=>{
    console.warn(result);
    if(result){
 this.productList=result;
    }
  })

}
}