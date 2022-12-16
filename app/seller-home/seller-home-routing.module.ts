import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { SellerHomeComponent } from './seller-home.component';

const routes: Routes = [{ path: '', component: SellerHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerHomeRoutingModule { }
