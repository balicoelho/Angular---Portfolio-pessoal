import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VariablesComponent } from './variables/variables.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VariablesComponent,
    SobreMimComponent,
    ApresentacaoComponent,
    SkillsComponent,
    CardSkillsComponent,
    CardExperienceComponent,
    ContactComponent,
    HomeComponent,
    FormacaoComponent,
    ExperienciaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
