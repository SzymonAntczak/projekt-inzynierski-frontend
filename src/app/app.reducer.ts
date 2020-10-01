import { ActionReducerMap } from '@ngrx/store';

import * as fromMainLayout from './layouts/main/store/main-layout.reducer';

export interface AppState {
    mainLayout: fromMainLayout.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    mainLayout: fromMainLayout.mainLayoutReducer
}