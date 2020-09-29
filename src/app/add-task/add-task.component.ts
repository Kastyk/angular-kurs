import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  @Output() emitTask: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add(): void {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }
}
