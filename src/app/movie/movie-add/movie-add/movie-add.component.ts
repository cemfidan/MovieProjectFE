import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../../movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent implements OnInit {
  movieAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createMovieAddForm();
  }

  createMovieAddForm() {
    this.movieAddForm = this.formBuilder.group({
      // movieId: "",
      directorId: "",
      movieName: "",
      description: "",
      imageUrl: "",
      movieScore: "",
      releaseDate: ""
    })
  }

  add() {
    if (this.movieAddForm.valid) {
      let movieModel = Object.assign({}, this.movieAddForm.value)
      this.movieService.addMovie(movieModel).subscribe(response => {
        console.log(response)
        this.toastrService.success("Movie added", "Successful")
      }, responseError=>{
        if(responseError.error.length>0){
          this.toastrService.error(responseError.error)
          console.log(responseError.error)
        }
      })
    } else {
      this.toastrService.error("Fill in the required fields", "Warning")
    }

  }

}
