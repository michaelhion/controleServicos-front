import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/core/models/api.model';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servicos.component.html',
  styleUrls: ['./listar-servicos.component.css']
})
export class ListarServicosComponent implements OnInit {
  lista!: Api[];
  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.getServicos()
  }

  public getServicos(){
    this.service.getListaServico().subscribe((data:Api[]) =>{
       this.lista = data;
    },
    err =>{
      console.log(err)
      return this.lista;
    })
  }

  
}
