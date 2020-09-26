import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutModule } from './layouts/main/main-layout.module';
import { MainLayout } from './layouts/main/main.layout';

const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadChildren: () => import('./views/homepage/homepage-view.module').then(m => m.HomepageViewModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        MainLayoutModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
