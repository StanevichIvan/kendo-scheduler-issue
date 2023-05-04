import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SchedulerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
