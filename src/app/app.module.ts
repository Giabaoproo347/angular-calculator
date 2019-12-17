import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorAbcComponent } from './calculator-abc/calculator-abc.component';
import {FormsModule} from "@angular/forms";
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorAbcComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule.forRoot(),
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
