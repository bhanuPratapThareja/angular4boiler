import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
      HeaderComponent, 
      HomeComponent
    ],
    imports: [
        CoreRoutingModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        CoreRoutingModule
    ]
})

export class CoreModule {}