import { BasePayloadResponse, BaseState } from 'src/app/shared/models/base-models';
import { GqlRestaurantListItem } from '../graphql';

export interface MainLayoutState extends BaseState {
    menu: MenuItem[];
    restaurantList: GqlRestaurantListItem[];
}

export interface GetRestaurantListResponsePayload extends BasePayloadResponse {
    restaurantList: GqlRestaurantListItem[];
}

export interface MenuItem {
    title: string;
    routerLink: string;
    icon: string;
}

