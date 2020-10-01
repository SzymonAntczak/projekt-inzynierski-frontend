import { Action } from '@ngrx/store';

import { MenuItem } from '../main.model';

export const GET_MENU_ITEMS = 'GET_MENU_ITEMS';

export class GetMenuItems implements Action {
    readonly type = GET_MENU_ITEMS;

    constructor(public payload: MenuItem[]) { }
}

export type MainLayoutActions = GetMenuItems;