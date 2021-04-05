import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmacaoComponent } from './components/consultas/confirmacao/confirmacao.component';
import { ConsultasComponent } from './components/consultas/consultas.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {'path': 'home', component: ConsultasComponent},
  {'path': 'confirmation', component: ConfirmacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
