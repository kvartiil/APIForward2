import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { SisendInformatsioon } from './content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  paringustring: string;

  public getUsers(): Observable<SisendInformatsioon> {
    /////this.paringustring = localStorage.getItem("tonuvalja");  //SEE SISSE TONULE
    this.paringustring = localStorage.getItem("minavalja");   //SEE VALJA TONULE
    const url = this.paringustring;
    //const url = 'https://randomapi.com/api/63o7ci12?key=FD5H-6GAY-LIWY-U43A';
    return this.http.get<SisendInformatsioon>(url);
  }
} 