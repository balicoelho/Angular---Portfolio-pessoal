import { Component, Input } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: [
    './experiencia.component.css',
    '../../variables/variables.component.css',
  ],
})
export class ExperienciaComponent {
  @Input() projetoName: string = '';
  @Input() projetoEmpresa: string = '';
  @Input() urlRepo: string = '';
  @Input() urlLink: string = '';
  @Input() urlImgExperience: string = '';
  @Input() classeAtiva: boolean = true;

  constructor(private pdfService: PdfService) {
    this.pdfService.nameChanged.subscribe((newName: boolean) => {
      this.classeAtiva = newName;
    });
  }
}
