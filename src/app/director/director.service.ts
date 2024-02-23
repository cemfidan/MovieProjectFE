import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from './director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  baseUrl = 'https://localhost:7016/api/Directors';
  constructor(private httpClient: HttpClient) { }

  getDirectors(): Observable<Director[]> {
    return this.httpClient.get<Director[]>(this.baseUrl)
  }

}
