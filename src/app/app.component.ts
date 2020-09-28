import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nauka angulara';
  dog = new Dog('Reksio');
  show = true;

  changeTitle(): void {
    this.title = 'Angular jest fajny!';
  }
  changeDog(): void {
    // this.dog.name = 'Ciapek';
    this.dog = new Dog('Ciapek');
  }
  nothing(): void {}
  destroy(): void {
    this.show = !this.show;
  }
  constructor() {}
}
export class Dog {
  constructor(public name: string) {}
}
