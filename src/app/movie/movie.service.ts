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
    return this.httpClient.get<Movie[]>(this.baseUrl)
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.baseUrl, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(this.baseUrl, movie);
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.httpClient.delete<Movie>(this.baseUrl);
  }
}
