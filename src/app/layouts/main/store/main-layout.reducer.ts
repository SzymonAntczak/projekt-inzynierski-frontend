
import { MenuItem, Restaurant } from '../main.model';
import * as MainLayoutActions from './main-layout.actions';

export interface State {
    menu: MenuItem[];
    restaurants: Restaurant[];
    isLoading: boolean;
    error: string;
}

const initialState: State = {
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
    restaurants: [],
    isLoading: false,
    error: null
};

export function mainLayoutReducer(state = initialState, action: MainLayoutActions.MainLayoutActions) {
    switch (action.type) {
        case MainLayoutActions.FETCH_RESTAURANTS:
            return {
                ...state,
                isLoading: true
            };
        case MainLayoutActions.FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurants: [ ...action.payload.restaurants ],
                isLoading: false,
                error: null
            };
        case MainLayoutActions.HANDLE_ERROR_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        default:
            return { ...state };
    };
}