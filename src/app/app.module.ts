import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    FeatureModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
