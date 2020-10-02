import { GET_RESTAURANT_LIST, GET_RESTAURANT_LIST_RESPONSE, MainLayoutActions } from './main-layout.actions';
import { MainLayoutState } from './main-layout.model';

const initialState: MainLayoutState = {
    menu: [
        {
            title: 'Home',
            routerLink: '/',
            icon: ''
        },
        {
            title: 'Restaurants',
            routerLink: '/restaurants',
            icon: ''
        }
    ],
    restaurantList: [],
    isLoading: false,
    error: null
};

export function mainLayoutReducer(state = initialState, action: MainLayoutActions): MainLayoutState {
    switch (action.type) {
        case GET_RESTAURANT_LIST:
            return {
                ...state,
                isLoading: true
            };
        case GET_RESTAURANT_LIST_RESPONSE:
            return {
                ...state,
                restaurantList: [ ...action.payload.restaurantList ],
                isLoading: false,
                error: action.payload.error
            };
        default:
            return { ...state };
    };
}