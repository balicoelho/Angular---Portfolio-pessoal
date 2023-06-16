import { Component } from '@angular/core';
import { PdfService } from '../../pdf.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../../variables/variables.component.css',
  ],
})
export class HeaderComponent {
  constructor(private pdfService: PdfService) {}

  gerarPDF() {
    this.pdfService.gerarPDF();
  }
}
