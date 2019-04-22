import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MarkdownModule } from 'ngx-markdown';


import {
  SheetbaseService,
  ApiService,
  DatabaseService,

  AppService,
  NavService,
  DataService,
  DateService,
} from '@sheetbase/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // @sheetbase/angular
    SheetbaseService,
    ApiService,
    DatabaseService,
    AppService,
    NavService,
    DataService,
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
