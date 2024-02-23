import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
      //console.log(response) for test
    })
  }
}

