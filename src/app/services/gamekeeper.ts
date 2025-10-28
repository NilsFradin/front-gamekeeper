import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamekeeperService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/games`);
  }

  getGameById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/games/${id}`);
  }

  addGame(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/games`, data);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/games/${id}`);
  }
}