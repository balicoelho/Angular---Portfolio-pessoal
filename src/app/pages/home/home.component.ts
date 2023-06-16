import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

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
