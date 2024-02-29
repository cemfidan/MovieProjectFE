import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://localhost:7016/api/Movies';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseUrl)
  }

  getById(id: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('${baseUrl}/${id}')
  }

  add(data: Movie[]): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  update(id: number, data: Movie[]): Observable<any> {
    return this.httpClient.put('${baseUrl}/${id}', data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete('${baseUrl}/${id}');
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseUrl);
  }
}
