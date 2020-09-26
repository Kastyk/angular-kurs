import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angulara';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Reksio', 4);
  dog1: Dog;
  showDog = () => `Mój pies to ${this.dog.name} i ma ${this.dog.age} lata.`;
}
class Dog {
  constructor(public name: string, public age: number) {}
}
