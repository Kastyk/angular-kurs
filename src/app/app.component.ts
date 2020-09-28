import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask: string;
  taskList: string[] = [];
  taskDone: string[] = [];
  constructor() {}
  add(): void {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }
  remove(task: string): void {
    // ja bym spróbował z usunięciem tylko tego elementu, korzystając z indeksu
    this.taskList = this.taskList.filter((item) => item !== task);
  }
  done(task: string): void {
    this.taskDone.push(task);
    this.remove(task);
  }
}
