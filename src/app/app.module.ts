import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { AutomacaoIndustrialComponent } from './pages/automacao-industrial/automacao-industrial.component';
import { AlteraCorDirective } from './diretives/altera-cor.directive';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AutomacaoResidencialComponent } from './pages/automacao-residencial/automacao-residencial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContatoComponent,
    RodapeComponent,
    AlimentosComponent,
    AutomacaoIndustrialComponent,
    AlteraCorDirective,
    PageHomeComponent,
    AutomacaoResidencialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
