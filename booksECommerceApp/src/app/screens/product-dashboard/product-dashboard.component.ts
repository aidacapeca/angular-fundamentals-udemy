import { Component, OnInit } from '@angular/core';
import { SingleBook } from 'src/app/interfaces/ecommerce.interface';
import {MatDialog} from '@angular/material/dialog';

import {ECOMMERCE_BOOKS} from '../../constants/main-data'
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  public productsInventary = ECOMMERCE_BOOKS;
  public shoppingCart = [] as SingleBook[]
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  private _addProductToCart(bookSelected: SingleBook): void {
    this.shoppingCart.push(bookSelected);
    console.log(this.shoppingCart);
  }

  public openAddProductModal(bookSelected: SingleBook): void {
    this._addProductToCart(bookSelected);
    const dialogRef = this.dialog.open(ConfirmationModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
