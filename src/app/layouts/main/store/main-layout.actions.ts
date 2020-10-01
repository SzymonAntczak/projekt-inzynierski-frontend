import { Action } from '@ngrx/store';

import { Restaurant } from '../main.model';

export const FETCH_RESTAURANTS = '[Main Layout] Fetch Restaurants';
export const FETCH_RESTAURANTS_SUCCESS = '[Main Layout] Fetch Restaurants Success';
export const HANDLE_ERROR_RESPONSE = '[Main Layout] Handle Error Response';

export class FetchRestaurants implements Action {
    readonly type = FETCH_RESTAURANTS;
}

export class FetchRestaurantsSuccess implements Action {
    readonly type = FETCH_RESTAURANTS_SUCCESS;

    constructor(public payload: { restaurants: Restaurant[] }) { }
}

export class HandleErrorResponse implements Action {
    readonly type = HANDLE_ERROR_RESPONSE;

    constructor(public payload: { error: string }) { }
}

export type MainLayoutActions = FetchRestaurants | FetchRestaurantsSuccess | HandleErrorResponse;