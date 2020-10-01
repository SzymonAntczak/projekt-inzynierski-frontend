import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GET_RESTAURANTS } from '../graphql/main-layout.gql';
import { Restaurant } from '../main.model';
import * as MainLayoutActions from './main-layout.actions';

@Injectable()
export class MainLayoutEffects {
    @Effect() fetchRestaurantsEffect = this.actions$.pipe(
        ofType(MainLayoutActions.FETCH_RESTAURANTS),
        switchMap(() => this.apollo.watchQuery<{ restaurants: Restaurant[] }>({ query: GET_RESTAURANTS }).valueChanges.pipe(
            map(response => response.data.restaurants),
            map(restaurants => new MainLayoutActions.FetchRestaurantsSuccess({ restaurants })),
            catchError(({ message }) => of(new MainLayoutActions.HandleErrorResponse({ error: message })))
        ))
    );

    constructor(private actions$: Actions, private apollo: Apollo) { }
}