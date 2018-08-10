import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
