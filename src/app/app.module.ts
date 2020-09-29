import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { ClickService } from './services/click.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    // tablica komponentów, pipe'ów i dyrektyw
    AppComponent,
    Klikacz1Component,
    Klikacz2Component,
  ],
  imports: [
    BrowserModule, // moduł używany do odpalenie aplikacji w przeglądarce
    AppRoutingModule, // moduł używany do routingu
    FormsModule,
  ],
  providers: [ClickService, LogService], // tutaj podajemy informacje o serwisach
  bootstrap: [AppComponent], // komponent startowy
})
export class AppModule {}
