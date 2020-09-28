import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    // tablica komponentów, pipe'ów i dyrektyw
    AppComponent,
    ChildComponent,
    Child2Component,
  ],
  imports: [
    BrowserModule, // moduł używany do odpalenie aplikacji w przeglądarce
    AppRoutingModule, // moduł używany do routingu
    FormsModule,
  ],
  providers: [], // tutaj podajemy informacje o serwisach
  bootstrap: [AppComponent], // komponent startowy
})
export class AppModule {}
