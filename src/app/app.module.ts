import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

/* Componentes del cliente */
import { HeaderComponent } from './client/header/header.component'; 
import { FooterComponent } from './client/footer/footer.component'; 
import { HomeComponent } from './client/home/home.component'; 
import { ProductsingleComponent } from './client/productsingle/productsingle.component'; 
import { CartComponent } from './client/cart/cart.component'; 
import { CheckoutComponent } from './client/checkout/checkout.component'; 
import { ShopComponent } from './client/shop/shop.component'; 
import { DashboardComponent } from './client/dashboard/dashboard.component'; 
import { OrdersComponent } from './client/orders/orders.component'; 
import { LoginComponent } from './client/login/login.component'; 
import { SignupComponent } from './client/signup/signup.component'; 
import { ForgotPasswordComponent } from './client/forgot-password/forgot-password.component'; 
import { ProfileDetailsComponent } from './client/profile-details/profile-details.component';
import { AddressComponent } from './client/address/address.component'; 
import { EditAddressComponent } from './client/edit-address/edit-address.component'; 
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import { IndexComponent } from './client/index/index.component';

/* Componentes del Administrador */
import { HeaderAdminComponent } from './admin/component/header/header.component';
import { DashboardAdminComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/component/sidebar/sidebar.component';

/* Componente de rutas y la aplicación */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,
    HeaderAdminComponent,
    DashboardAdminComponent,
    SidebarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
