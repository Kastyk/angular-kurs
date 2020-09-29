import { ClickService } from './../services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css'],
})
export class Klikacz1Component implements OnInit {
  click = 0;
  // Wstrzyknięcie serwisu do komponentu
  constructor(private clickService: ClickService) {}

  ngOnInit(): void {}
  add(): void {
    this.click += 1;
    // wywołanie metody z serwisu
    this.clickService.addClicks();
  }
}
