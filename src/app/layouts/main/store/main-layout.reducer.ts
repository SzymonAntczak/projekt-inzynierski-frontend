
import { MenuItem } from '../main.model';
import * as MainLayoutActions from './main-layout.actions';

export interface State {
    menu: MenuItem[];
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
    ]
};

export function mainLayoutReducer(state = initialState, action: MainLayoutActions.MainLayoutActions) {
    switch (action.type) {
        case MainLayoutActions.GET_MENU_ITEMS:
            return {
                ...state,
                menu: [
                    ...state.menu,
                    ...action.payload
                ]
            };
        default:
            return { ...state };
    };
}