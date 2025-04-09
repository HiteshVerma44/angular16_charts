import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, GeneralDashboardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
