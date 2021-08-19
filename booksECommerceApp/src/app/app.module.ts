import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';

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
   //Angular
   AppRoutingModule,
   BrowserModule,
   BrowserAnimationsModule,
   //Angular-material
   MatButtonModule,
   MatCardModule,
   MatDialogModule,
   MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
