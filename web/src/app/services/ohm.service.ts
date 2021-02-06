import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ohm } from '../models/ohm.model';


@Injectable({
  providedIn: 'root'
})
export class OhmService {

  constructor(private http: HttpClient) { }

  getOhmById(id: number): Observable<Ohm> {
    return this.http.get<any>(`${environment.baseUrl}/api/ohms/${id}`);
  }

  sendReason(payload: any): Observable<{success: boolean}> {
    return this.http.post<any>(`${environment.baseUrl}/api/ohms/reason`, payload);
  }
}
