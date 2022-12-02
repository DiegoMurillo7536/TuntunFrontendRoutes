import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './client/address/address.component';
import { CartComponent } from './client/cart/cart.component'; 
import { CheckoutComponent } from './client/checkout/checkout.component'; 
import { DashboardComponent } from './client/dashboard/dashboard.component'; 
import { EditAddressComponent } from './client/edit-address/edit-address.component';
import { ForgotPasswordComponent } from './client/forgot-password/forgot-password.component'; 
import { HomeComponent } from './client/home/home.component'; 
import { IndexComponent } from './client/index/index.component';
import { LoginComponent } from './client/login/login.component'; 
import { OrdersComponent } from './client/orders/orders.component'; 
import { ProductsingleComponent } from './client/productsingle/productsingle.component'; 
import { ProfileDetailsComponent } from './client/profile-details/profile-details.component'; 
import { ShopComponent } from './client/shop/shop.component'; 
import { SignupComponent } from './client/signup/signup.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  {path: 'client',
   children:[
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'product-single', component: ProductsingleComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'cart', component: CartComponent },
    { path: 'dashboard-client', component: DashboardComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'address', component: AddressComponent },
    { path: 'edit-address', component: EditAddressComponent },
    { path: 'profile-details', component: ProfileDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    ] },
    
    { path: '**', redirectTo: '/client/home', pathMatch: 'full' },
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
