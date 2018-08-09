import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule
  ],
})
export class SharedModule { }
