import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'howler';

import { AppComponent } from './app.component';
import { KeyDirective } from './key.directive';
import { KeyboardLayoutComponent } from './keyboard-layout/keyboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyDirective,
    KeyboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
