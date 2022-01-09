import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './main/search/search.component';
import {DetailedComponent} from './main/detailed/detailed.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CredentialInterceptor} from "./middlewares/credential.interceptor";
import { ListComponent } from './main/list/list.component';
import {NgxPaginationModule} from "ngx-pagination";
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailedComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: CredentialInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
