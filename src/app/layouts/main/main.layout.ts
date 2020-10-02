import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/app-store';
import { GetRestaurantList, MainLayoutState } from './store';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit {
  mainLayoutState$: Observable<MainLayoutState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.mainLayoutState$ = this.store.select('mainLayout');
  }

  getRestaurants() {
    this.store.dispatch(new GetRestaurantList());
  }

}
