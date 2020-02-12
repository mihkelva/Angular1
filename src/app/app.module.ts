import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestingComponent } from './testing/testing.component';
import { ServersComponent } from './servers/servers.component';
import { PracticeComponent } from './practice/practice.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Databinding2Component } from './databinding2/databinding2.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestingComponent,
    ServersComponent,
    PracticeComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Databinding2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
