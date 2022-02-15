import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicosComponent } from './listar-servicos.component';

const routes: Routes = [{path:'',component:ListarServicosComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ListarServicoRoutingModule { }
