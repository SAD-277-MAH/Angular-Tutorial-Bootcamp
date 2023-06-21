import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { MyDirectiveDirective } from './my-directive.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [			
    AppComponent,
    ClassDirective,
      MyDirectiveDirective,
      TimesDirective
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
