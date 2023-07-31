import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { SigninPopupComponent } from './components/signin-popup/signin-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './pages/item/item.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    HomeComponent,
    ButtonComponent,
    SigninPopupComponent,
    CustomStyleDirective,
    SidebarComponent,
    CartComponent,
    ItemComponent,
    CartCardComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
