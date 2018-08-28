import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
})
export class SharedModule { }
