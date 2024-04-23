import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map  } from 'rxjs';

const host="http://localhost:3000/apitaikhoannv"

@Injectable({
  providedIn: 'root'
})
export class TaikhoannvService {

  constructor(private http: HttpClient) { }
  //cac phuong thuc khac
  getList(): Observable<any>{
    return this.http.get<any[]>(`${host}`)
  }
  getbyid(id: number): Observable<any>{
    return this.http.get<any>(`${host}/getonce/`+id)
  } 
  login(body: any): any{
    return this.http.post<any[]>(`${host}/login`, body)
  }
  Create(data: any){
    return this.http.post(`${host}/create` ,data)
  }
}
