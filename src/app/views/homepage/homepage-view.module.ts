import { NgModule } from '@angular/core';

import { HomepageView } from './homepage.view';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageViewRoutingModule } from './homepage-view-routing.module';

@NgModule({
  declarations: [HomepageView],
  imports: [
    SharedModule,
    HomepageViewRoutingModule
  ]
})
export class HomepageViewModule { }
