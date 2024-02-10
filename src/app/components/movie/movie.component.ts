import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(response => {
      this.movies = response
    })
  }

}

