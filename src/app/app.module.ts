import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngekiContainerComponent } from './container/ongeki-container/ongeki-container.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './service/token-interceptor.service';
import {ErrorInterceptorService} from './service/error-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localeJa from '@angular/common/locales/ja';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    OngekiContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
