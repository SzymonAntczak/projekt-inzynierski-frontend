import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GET_RESTAURANT_LIST, GetRestaurantListResponse } from './main-layout.actions';
import { GQL_GET_RESTAURANT_LIST, GqlRestaurantList } from '../graphql';

@Injectable()
export class MainLayoutEffects {
    @Effect() getRestaurantList = this.actions$.pipe(
        ofType(GET_RESTAURANT_LIST),
        switchMap(() => this.apollo.watchQuery<GqlRestaurantList>({ query: GQL_GET_RESTAURANT_LIST }).valueChanges.pipe(
            map(response => response.data.restaurants)
        )),
        switchMap(restaurantList => of(new GetRestaurantListResponse({ restaurantList, error: null }))),
        catchError(({ message }) => of(new GetRestaurantListResponse({ restaurantList: [], error: message })))
    );

    constructor(private actions$: Actions, private apollo: Apollo) { }
}