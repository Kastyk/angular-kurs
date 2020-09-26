import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText = 'Przykładowy tekst';
  inputText2Way = ' ';
  button = true;
  showClick = '';
  click = (event) => {
    this.showClick = 'Przycisk aktywny!';
    this.button = false;
  };
}
