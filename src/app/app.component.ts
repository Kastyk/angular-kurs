import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angulara';
  days = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];
  dogs: Dog[] = [];
  constructor() {}

  addDogs = () => {
    return this.dogs.push(
      new Dog('Reksio', 4),
      new Dog('Łatek', 3),
      new Dog('Maksiu', 5),
      new Dog('Łapek', 6),
      new Dog('Pluto', 8),
    );
  };
  removeDogs = () => {
    return (this.dogs = []);
  };
}
class Dog {
  constructor(public name: string, public age: number) {}
}
