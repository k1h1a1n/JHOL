import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppStartComponent } from './app-start.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRouteGuard, AppRoute404 } from './app-route.guard';

import { SharedModule } from './shared/shared.module';
import { httpInterceptorProviders } from './shared/interceptors';
import { HttpErrorHandler } from './shared/error-handler/http-error-handler.service';
import { DataService } from './shared/services/DataService.service';
import { MessageService } from './shared/error-handler/message.service';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent,
    AppRoute404,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [
    AppRouteGuard,
    httpInterceptorProviders,
    HttpErrorHandler,
    MessageService,
    DataService
  ],
  entryComponents:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
