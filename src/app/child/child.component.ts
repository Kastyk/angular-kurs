import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
/*OnChanges*/
export class ChildComponent implements OnInit {
  @Input() tasks: string[] = [];
  @Output() eventTask: any = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  selected(task): void {
    this.eventTask.emit(task);
  }
}
