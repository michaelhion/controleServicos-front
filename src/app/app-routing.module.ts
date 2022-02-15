import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'login',
    loadChildren:()=>
    import('./modules/login/login.module').then(
      (m) => m.LoginRoutingModule
      ),
  },
  {
    path:'listarServico',
    loadChildren:()=>
    import('./modules/listar-servicos/listarServico.module').then(
      (m) => m.ListarServicoRoutingModule
      ),
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
