// Import neccessary files for initializing module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { SpacexService } from './spacex.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
