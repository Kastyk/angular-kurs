import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // tablica komponentów, pipe'ów i dyrektyw
    AppComponent,
  ],
  imports: [
    BrowserModule, // moduł używany do odpalenie aplikacji w przeglądarce
    AppRoutingModule, // moduł używany do routingu
  ],
  providers: [], // tutaj podajemy informacje o serwisach
  bootstrap: [AppComponent], // komponent startowy
})
export class AppModule {}
