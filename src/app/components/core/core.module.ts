import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { HomeModule } from './../home/home.module';

@NgModule({
  declarations: [
      HeaderComponent, 
      BodyComponent
    ],
    imports: [
        CoreRoutingModule,
        HomeModule
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
        CoreRoutingModule
    ]
})

export class CoreModule {}