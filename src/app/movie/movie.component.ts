import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { FormGroup, FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private modalService = inject(NgbModal);
  closeResult = '';
  movieForm: FormGroup;
  movies: Movie[] = [];
  movieBase: Movie = new Movie();
  constructor(private movieService: MovieService, private toastrService: ToastrService, private modal: NgbModal, private activeRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
    this.createMovieForm();
  }

  createMovieForm() {
    this.movieForm = this.formBuilder.group({
      actorId: ['', Validators.required],
      directorId: ['', Validators.required],
      movieName: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      movieScore: ['', Validators.required],
      releaseDate: ['', Validators.required]
    })
  }

  getAll() {
    this.movieService.getAll().subscribe(response => {
      this.movies = response
      console.log(response)
    })
  }

  updateMovie(movie: Movie) {
    if (this.movieForm.valid) {
      const movieModel = Object.assign({}, this.movieForm.value)
      this.movieService.updateMovie(movieModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(movie.movieName + " updated", "Success")
      }, error => {
        console.log(error)
        this.toastrService.error("Update failed: " + movie.movieName, "Error")
      })
    } else {
      this.toastrService.error("Form is invalid", "Attention")
    }
  }

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.movieId)
      .subscribe(response => {
        this.movies.splice(this.movies.findIndex(m => m.movieId == movie.movieId), 1);
        this.toastrService.success(movie.movieName + " deleted", "Success")
      }, (error) => {
        this.toastrService.error("Deletion failed: " + movie.movieName, "Error")
        console.error('Deletion failed: ', error);
      });
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(this.movieBase).subscribe(response => {
      this.movies.push(response);
      this.toastrService.success(movie.movieName + " added", "Success")
    }, (error) => {
      this.toastrService.error("Add failed : " + movie.movieName, "Error")
      console.error('Add failed:', error);
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}