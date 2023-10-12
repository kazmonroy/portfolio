import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeToggleModule } from './mode-toggle/mode-toggle.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CopyClipboardComponent } from './shared/components/copy-clipboard/copy-clipboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModeToggleModule,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CopyClipboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
