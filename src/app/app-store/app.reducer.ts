import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.model';
import { mainLayoutReducer } from '../layouts/main/store';

export const appReducer: ActionReducerMap<AppState> = {
    mainLayout: mainLayoutReducer
};

