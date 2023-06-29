import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  tamMax: boolean = false;
  onSubmit(form: any) {
    const submission = form.value;
    localStorage.setItem('cadastro', JSON.stringify(submission));
    alert('Obrigada pelo contato! Informações enviadas!');
    form.reset();
  }

  checkMaxLength(nameControl: NgModel) {
    if (nameControl.value.length == '300') {
      this.tamMax = true;
    }
    if (nameControl.value.length < '300') {
      this.tamMax = false;
    }
  }
}
