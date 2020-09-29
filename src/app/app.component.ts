import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskList: string[] = [];
  taskDone: string[] = [];
  constructor() {}
  ngOnInit(): void {
    this.taskList = [
      'Sprzątanie kuwety',
      'Nauka Angulara',
      'Podlewanie kwiatów',
      'Zakupy',
    ];
  }
  add(task: string): void {
    this.taskList.push(task);
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
