import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes = [
  {path: '', component: NavbarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
