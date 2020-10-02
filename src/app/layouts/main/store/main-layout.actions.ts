import { Action } from '@ngrx/store';

import { GetRestaurantListResponsePayload } from './main-layout.model';

export const GET_RESTAURANT_LIST = '[Main Layout] Get Restaurant List';
export const GET_RESTAURANT_LIST_RESPONSE = '[Main Layout] Get Restaurant List Response';

export class GetRestaurantList implements Action {
    readonly type = GET_RESTAURANT_LIST;
}

export class GetRestaurantListResponse implements Action {
    readonly type = GET_RESTAURANT_LIST_RESPONSE;

    constructor(public payload: GetRestaurantListResponsePayload) { }
}

export type MainLayoutActions = GetRestaurantList | GetRestaurantListResponse;