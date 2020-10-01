import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MenuItem, Restaurant } from './main.model';
import * as fromApp from 'src/app/app.reducer';
import * as MainLayoutActions from './store/main-layout.actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit {
  menu: MenuItem[];
  restaurants: Restaurant[];
  isLoading: boolean;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('mainLayout').subscribe(mainLayout => {
      this.menu = mainLayout.menu;
      this.restaurants = mainLayout.restaurants;
      this.isLoading = mainLayout.isLoading;
    });
  }

  fetchRestaurants() {
    this.store.dispatch(new MainLayoutActions.FetchRestaurants());
  }

}
