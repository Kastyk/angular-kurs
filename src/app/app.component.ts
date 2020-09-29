import { ClickService } from './services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allClicks: number;
  constructor(private clickService: ClickService) {}
  ngOnInit(): void {
    this.clickService.getSum().subscribe((clicks) => {
      this.allClicks = clicks;
    });
  }
}
