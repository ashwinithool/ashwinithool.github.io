import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';



const routes: Routes = [{ path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
 { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
 { path: 'seller-home',canActivate:[AuthGuard], loadChildren: () => import('./seller-home/seller-home.module').then(m => m.SellerHomeModule),},
 { path: 'seller-add-product',canActivate:[AuthGuard], loadChildren: () => import('./seller-add-product/seller-add-product.module').then(m => m.SellerAddProductModule) },
 { path: 'seller-update-product/:id', loadChildren: () => import('./seller-update-product/seller-update-product.module').then(m => m.SellerUpdateProductModule) },
 { path: 'search/:query', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
 { path: 'details/:productId', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
 { path: 'user-auth', loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },
 

 
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
