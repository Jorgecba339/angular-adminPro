import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// Modulos inportados
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
