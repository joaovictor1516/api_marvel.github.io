import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NavebarComponent } from '../navebar/navebar.component';
import { HeroisComponent } from '../herois/personagens/herois.component';
import { NovelsComponent } from '../herois/novels/novels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    HeroisComponent,
    NovelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
