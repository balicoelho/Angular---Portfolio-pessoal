import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../variables/variables.component.css',
  ],
})
export class HomeComponent {
  classeAtiva: boolean = false;
}
