import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from './actor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  baseUrl = 'https://localhost:7016/api/Actors';
  constructor(private httpClient: HttpClient) { }
  getActors(): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(this.baseUrl)
  }
}
