import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'alimentos',
    component: AlimentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
