import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyPropBindComponent } from './my-prop-bind/my-prop-bind/my-prop-bind.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyPropBindComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
