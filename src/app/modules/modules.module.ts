import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { ListarServicosComponent } from './listar-servicos/listar-servicos.component';



@NgModule({
  declarations: [
    LoginComponent,
    ListarServicosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
})
export class ModulesModule { }
