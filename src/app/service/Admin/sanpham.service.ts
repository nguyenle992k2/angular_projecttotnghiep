import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map  } from 'rxjs';

const host="http://localhost:3000/apisanpham"

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(private http: HttpClient) { }
  //cac phuong thuc khac
  getList(): Observable<any>{
    return this.http.get<any[]>(`${host}`)
  }
  getbyid(id: number): Observable<any>{
    return this.http.get<any>(`${host}/getonce/`+id)
  }
  Create(data: any){
    return this.http.post(`${host}/create` ,data)
  }
  Update(data: any,id: number){
    return this.http.put(`${host}/update/`+id ,data)
  }
  Delete(id: number): Observable<any>{
    return this.http.delete<any>(`${host}/delete/`+id)
  }
}