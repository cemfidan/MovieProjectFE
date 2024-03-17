import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent implements OnInit {
  movieAddForm: FormGroup;
  submittedMovie: any;
  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private toastrService: ToastrService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.createMovieForm();
  }

  createMovieForm() {
    this.movieAddForm = this.formBuilder.group({
      actorId: ["", Validators.required],
      directorId: ["", Validators.required],
      movieName: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      movieScore: ["", Validators.required],
      releaseDate: ["", Validators.required]
    })
  }

  submit() {
    if (this.movieAddForm.valid) {
      let movieModel = Object.assign({}, this.movieAddForm.value)
      this.movieService.addMovie(movieModel).subscribe(response => {
        this.submittedMovie = response;
        console.log(response)
        this.toastrService.success("Movie added", "Success")
      }, error => {
        console.log(error)
        this.toastrService.error("Movie could not be added", "Error")
      })
    } else {
      this.toastrService.error("Form is invalid", "Attention")
    }
  }
}
