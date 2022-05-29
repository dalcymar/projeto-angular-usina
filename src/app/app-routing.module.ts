import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { AutomacaoIndustrialComponent } from './pages/automacao-industrial/automacao-industrial.component';
import { AutomacaoResidencialComponent } from './pages/automacao-residencial/automacao-residencial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'alimentos',
    component: AlimentosComponent
  },
  {
    path: 'automacao-industrial',
    component: AutomacaoIndustrialComponent
  },
  {
    path: 'automacao-residencial',
    component: AutomacaoResidencialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
