import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent, ShoppingListComponent, ToolbarComponent],
  imports: [
    CoreModule,
    FeatureModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
