import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasksList = ['Sprzątanie kuwety', 'Gotowanie', 'Nauka angulara'];
  /*Referencja, gdy nie jest przekazywana jako parametr */
  @ViewChild('childRef') childComponent: ChildComponent;

  @ViewChild('inputText') input: ElementRef;

  selected(task: string): void {
    console.log(task);
  }
  /*Referencja z parametrem */
  add(input: HTMLInputElement): void {
    this.tasksList.push(input.value);
    // this.childComponent.tasks = [];
    this.input.nativeElement.value = '';
  }
}
