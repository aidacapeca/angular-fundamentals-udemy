import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookECommerceRoutes } from '../../constants/routes-paths';
import { SingleBook } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  public booksToDisplay!: SingleBook;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ){}

  public checkAvailability(): boolean{
    return (this.booksToDisplay.availability > 0);
  }
  public goToConfirmation(book: SingleBook): void{
    this._router.navigate(['..', BookECommerceRoutes.checkoutDashboard], {
      relativeTo: this._activatedRoute,
      state: {  bookToAdd: book }
  });
  }
}
