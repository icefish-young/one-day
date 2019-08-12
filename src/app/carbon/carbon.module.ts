import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { InputModule } from 'carbon-components-angular/input/input.module';
import { ButtonModule } from 'carbon-components-angular/button/button.module';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    InputModule,
    ButtonModule
  ]
})
export class CarbonModule { }
