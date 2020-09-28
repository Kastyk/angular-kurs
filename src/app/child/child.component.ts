import {
  Component,
  OnInit,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { Dog } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
/*OnChanges*/
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() inputText: string;
  @Input() inputDog: Dog;
  show = true;
  constructor() {}
  /*
  Uruchamia się na początku, przed ngOnInit
  Sprawdza, czy zmieniły się pola komponentu
  Musi zmienić się referencjał

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges - uruchomione - #1`);
    console.log(changes);
  }
  */

  /*
  Uruchamia się jeden raz podczas inicjalizacji komponentu
  Uruchomi się po konstruktorze i po ngOnChange
  */
  ngOnInit(): void {
    console.log(`ngOnInit - uruchomione - #2`);
    this.inputDog.name = 'Inne imię';
  }
  /*
  Uruchamia się przy każdej zmianie, wywołanie eventu itd.
  */
  ngDoCheck(): void {
    console.log(`ngDoCheck - uruchomione - #3`);
  }
  /*
  Uruchamia się po inicjalizacji np. <ng-content></ng-content>
  */
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit - uruchomione! - #4`);
  }
  /*
  Uruchamia się po każdej zmianie np. <ng-content></ng-content>
  */
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked - uruchomione! - #5`);
  }
  /*
  Uruchamia się po inicjalizacji widoku np. <ng-content></ng-content>
  */
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - uruchomione! - #6`);
  }
  /*
  Uruchamia się po każdej zmianie widoku np. <ng-content></ng-content>
  */
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked - uruchomione! - #7`);
  }
  /*
  Uruchamia się po usunięciu czegoś z drzewa DOM
  */
  ngOnDestroy(): void {
    console.log(`ngOnDestroy - uruchomione! - #8`);
  }
  content(): void {
    this.show = !this.show;
  }
}
