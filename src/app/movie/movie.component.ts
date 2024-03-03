import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
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
  movieBase: Movie;
  constructor(private movieService: MovieService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.movieService.getAll().subscribe(response => {
      this.movies = response
      console.log(response)
    })
  }

  updateMovie(movie: Movie) {
    this.movieService.updateMovie(movie).subscribe(response => {
      movie = response;
      this.toastrService.success(movie.movieName, "Update completed!")
      console.log(movie);
    })
  }

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.movieId)
      .subscribe(response => {
        this.movies = this.movies.filter(m => m.movieId !== movie.movieId);
        this.toastrService.error(movie.movieName, "Deletion completed!")
        console.log(movie);
      });
  }

  addMovie() {
    this.toastrService.success("Movie added!")

  }

}

