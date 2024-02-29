import { Component, Input, OnInit } from '@angular/core';
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

  updateMovie(movie:Movie){
    this.toastrService.success("Update completed!", movie.movieName)
    console.log(movie);
  }

  deleteMovie(movie:Movie){
    this.toastrService.error("Deletion completed!", movie.movieName)
    console.log(movie);
  }

}

