import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//=====================================================================
import { PhoneService } from './phone.service';// this is how you import a service
//=====================================================================


import { RouterModule } from "@angular/router";// it is part of angular
//====================================================
import { routes } from './app.routing';//i import this from app.routin.ts
//====================================================

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)//  <- you set the routes from the imported file

  ],
  providers: [/*  | adding the serviceto the providers list*/
              PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
