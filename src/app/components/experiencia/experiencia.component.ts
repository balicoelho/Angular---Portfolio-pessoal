import { Component, Input } from '@angular/core';

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
}
