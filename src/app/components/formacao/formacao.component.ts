import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: [
    './formacao.component.css',
    '../../variables/variables.component.css',
  ],
})
export class FormacaoComponent {
  @Input() urlImg: string = '';
  @Input() AnoEInstituicao: string = '';
  @Input() curso: string = '';
}
