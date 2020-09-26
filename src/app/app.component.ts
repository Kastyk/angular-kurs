import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText = 'Tekst';
  colorClass = 'color';
  isDisable = true;

  constructor() {}

  onFocus(): void {
    this.colorClass = 'color2';
  }
  onClick(event): void {
    console.log(event);
  }
  onMouseMove(event): void {
    console.log(`x: ${event.clientX}, y: ${event.clientY}`);
  }
  onPaste(event): void {
    this.inputText = 'Nie wklejaj, wpisz!';
    event.target.value = '';
  }
  change(): void {
    this.isDisable = !this.isDisable;
  }
}
