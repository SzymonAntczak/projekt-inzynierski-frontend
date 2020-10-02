import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app-store';
import { GqlRestaurantListItem } from './graphql';
import { GetRestaurantList, MenuItem } from './store';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit {
  menu: MenuItem[];
  restaurantList: GqlRestaurantListItem[];
  isLoading: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('mainLayout').subscribe(mainLayout => {
      this.menu = mainLayout.menu;
      this.restaurantList = mainLayout.restaurantList;
      this.isLoading = mainLayout.isLoading;
    });
  }

  fetchRestaurants() {
    this.store.dispatch(new GetRestaurantList());
  }

}
