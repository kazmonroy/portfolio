import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeToggleModule } from './mode-toggle/mode-toggle.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModeToggleModule, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
