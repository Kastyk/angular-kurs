import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasksList: string[] = ['Sprzątanie kuwety', 'Gotowanie', 'Nauka angulara'];
  constructor() {}

  select(task: string): void {
    console.log(task);
  }
}
