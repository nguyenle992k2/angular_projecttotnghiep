import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map  } from 'rxjs';

const host="http://localhost:3000/apisanpham"

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  constructor(private http: HttpClient) { }
  getList(): Observable<any>{
    return this.http.get<any[]>(`${host}/sanphammoi`)
  } 
  getbyID(id: number): Observable<any>{
    return this.http.get<any[]>(`${host}/getonce/`+id)
  }
  sptheoloai(id: number): Observable<any>{
    return this.http.get<any[]>(`${host}/sptheoloai/`+id)
  }
  getspyeuthich(): Observable<any>{
    return this.http.get<any[]>(`${host}/spyeuthich`)
  }
  getCart(){
    let cartJson = sessionStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);
    } else{
      return [];
    }
  }
}
