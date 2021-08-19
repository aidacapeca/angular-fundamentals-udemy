import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component/header.component';
import { ProductCardComponent } from './components/product-card.component/product-card.component';
import { CheckoutDashboardComponent } from './screens/checkout-dashboard/checkout-dashboard.component';
import { ProductDashboardComponent } from './screens/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    CheckoutDashboardComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
