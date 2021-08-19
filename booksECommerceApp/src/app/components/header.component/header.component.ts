import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookECommerceRoutes } from '../../constants/routes-paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public routePaths = BookECommerceRoutes;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}


  public navigateFromMenu(optionSelected: string){
    this._router.navigate(['..', optionSelected],{
      //relativeTo: this._activatedRoute
    });
  }

}
