import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    FeatureModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
