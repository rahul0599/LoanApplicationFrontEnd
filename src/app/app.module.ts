import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SubmitAppPageComponent } from './components/submit-app-page/submit-app-page.component';
import { ViewAppPageComponent } from './components/view-app-page/view-app-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubmitSuccessComponent } from './components/submit-success/submit-success.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewAppDetailsComponent } from './components/view-app-details/view-app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubmitAppPageComponent,
    ViewAppPageComponent,
    SubmitSuccessComponent,
    ViewAppDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
