import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageView } from './homepage.view';

const routes: Routes = [
    {
        path: '',
        component: HomepageView
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageViewRoutingModule { }