import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarif } from 'app/tarif';


@Injectable({
  providedIn: 'root'
})
export class TarifService {
  private baseURL = "http://localhost:8081"; 
  

  constructor(private httpClient: HttpClient) { }
  header = { 
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  getTarifsList(): Observable<Tarif[]>{
    return this.httpClient.get<any>(this.baseURL+'/retrieve-all-tarifs');}
    createTarif(tarif : Object): Observable<Object>{ 
      return this.httpClient.post(this.baseURL+'/add-tarif', tarif);
    }
    updateTarif(id: number, value: any): Observable<Object> {
      return this.httpClient.put(this.baseURL+'/update-tarif', value, this.header);
    }
    deleteTarif(id: number): Observable<Object>{
      return this.httpClient.delete(this.baseURL+'/delete-tarif/'+id);
  
    } 
    getTarifById(id: number): Observable<Tarif>{ 
      return this.httpClient.get<Tarif>(this.baseURL+'/retrieve-tarif/'+id);
    }
}
