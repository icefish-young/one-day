import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarbonModule } from './carbon/carbon.module';

import { AppComponent } from './app.component';
import { RecordTimerComponent } from './record/record-timer/record-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordTimerComponent
  ],
  imports: [
    BrowserModule,
    CarbonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
