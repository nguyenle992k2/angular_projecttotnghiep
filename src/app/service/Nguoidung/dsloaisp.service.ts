import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map  } from 'rxjs';

const host="http://localhost:3000/apiloaisp"

@Injectable({
  providedIn: 'root'
})
export class DsloaispService {

  constructor(private http: HttpClient) { }
  getList(): Observable<any>{
    return this.http.get<any[]>(`${host}`)
  }
  getID(id: number): Observable<any>{
    return this.http.get<any[]>(`${host}/`+id)
  }
}