import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
      HeaderComponent, 
      BodyComponent
    ],
    imports: [
        CoreRoutingModule
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
        CoreRoutingModule
    ]
})

export class CoreModule {}