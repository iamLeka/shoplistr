import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
})
export class SharedModule { }
