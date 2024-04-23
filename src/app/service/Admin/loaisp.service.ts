import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map  } from 'rxjs';

const host="http://localhost:3000/apiloaisp"

@Injectable({
  providedIn: 'root'
})
export class LoaispService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  //cac phuong thuc khac
  getList(): Observable<any>{
    return this.http.get<any[]>(`${host}`)
  }
  getbyid(id: any): Observable<any>{
    return this.http.get<any[]>(`${host}/getonce/`+id)
  } 
  Create(data: any){
    return this.http.post(`${host}/create` ,data)
  }
  Update(data: any,id: any){
    return this.http.put(`${host}/update/`+id ,data)
  }
  Delete(id: number): Observable<any>{
    return this.http.delete(`${host}/delete/`+id)
  }
}
