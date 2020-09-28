import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // tasks przechowuje tablicę przekazaną przez app component
  // i wyświetla ją  w htmlu
  @Input() tasks: string[] = [];
  // eventTask to nasza nazwa eventu
  @Output() eventTask: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  // select to będzie jedna z dostępnych metod eventu eventTask
  select(task: string): void {
    // emitujemy nazwę taska
    this.eventTask.emit(task);
  }
}
