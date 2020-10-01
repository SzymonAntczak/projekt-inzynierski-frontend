import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MenuItem } from './main.model';
import * as fromApp from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit, OnDestroy {
  menu: MenuItem[];

  private subscription = new Subscription();

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription.add(
      this.store.select('mainLayout').subscribe(mainLayout => this.menu = mainLayout.menu)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
