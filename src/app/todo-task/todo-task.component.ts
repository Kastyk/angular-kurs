import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  @Input() tasksList: string[] = [];
  @Output() emitDone: any = new EventEmitter();
  @Output() emitRemove: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  remove(task: string): void {
    this.emitRemove.emit(task);
  }
  done(task: string): void {
    this.emitDone.emit(task);
  }
}
