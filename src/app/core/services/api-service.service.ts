import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'https://ancient-castle-43896.herokuapp.com/home/listarServicos';
  constructor(private http : HttpClient) { }

  private getHeaders(){
    const httpOptions : {headers: HttpHeaders} = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: 'Bearer ' + this.token,
      }),
    };
    return httpOptions;
  }

  getListaServico(): Observable<Api[]>{
    return this.http.get<Api[]>(this.url,this.getHeaders());
  }
}
