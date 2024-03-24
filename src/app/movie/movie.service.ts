import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://localhost:7016/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Movie[]> {
    let newUrl = this.baseUrl + 'api/Movies/getmovies';
    return this.httpClient.get<Movie[]>(newUrl)
  }

  getById(id: number): Observable<Movie[]> {
    let newUrl = this.baseUrl + 'api/Movies/getmovie/'+id;
    return this.httpClient.get<Movie[]>(newUrl)
  }

  addMovie(movie: Movie): Observable<Movie> {
    let newUrl = this.baseUrl + 'api/Movies/add';
    return this.httpClient.post<Movie>(newUrl, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    let newUrl = this.baseUrl + 'api/Movies/update';
    return this.httpClient.put<Movie>(newUrl, movie);
  }

  deleteMovie(id: number): Observable<Movie> {
    let newUrl = this.baseUrl + 'api/Movies/delete/'+id;
    return this.httpClient.delete<Movie>(newUrl);
  }

}
