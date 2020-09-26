import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const MaterialModule = [
  MatButtonModule
]

@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
