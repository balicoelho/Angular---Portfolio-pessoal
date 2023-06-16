import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  @ViewChild('htmlData') htmlData!: ElementRef;
  private classeAtiva: boolean = true;
  nameChanged: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  getclasseAtiva(): any {
    return this.classeAtiva;
  }

  setclasseAtiva(newName: boolean): void {
    this.classeAtiva = newName;
    this.nameChanged.next(newName);
  }

  public gerarPDF(): void {
    let DATA: any = document.getElementById('pdfContent');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 100;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
