import { Component, ContentChild, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private modalService = inject(NgbModal);
  closeResult = '';
  movies: Movie[] = [];
  movieBase: Movie;
  constructor(private movieService: MovieService, private toastrService: ToastrService, private modal: NgbModal) { }

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
      this.toastrService.success(movie.movieName, "Update completed")
      console.log(movie);
    }, (error) => {
      this.toastrService.error(movie.movieName, "Update failed")
      console.error('Update failed:', error);
    });
  }


  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.movieId)
      .subscribe(response => {
        this.movies.splice(this.movies.findIndex(m => m.movieId == movie.movieId), 1);
        this.toastrService.success(movie.movieName, "Deletion completed")
      }, (error) => {
        this.toastrService.error(movie.movieName, "Deletion failed")
        console.error('Deletion failed: ', error);
      });
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(this.movieBase).subscribe(response => {
      this.movies.push(response);
      this.toastrService.success(movie.movieName, "Movie added")
    }, (error) =>{
      this.toastrService.error(movie.movieName, "Add failed")
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