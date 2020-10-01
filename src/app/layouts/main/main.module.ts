import { NgModule } from '@angular/core';

import { MainLayout } from './main.layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    SharedModule
  ]
})
export class MainLayoutModule { }
