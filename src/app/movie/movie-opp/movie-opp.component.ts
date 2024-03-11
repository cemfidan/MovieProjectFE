import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie.component';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-opp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-opp.component.html',
  styleUrl: './movie-opp.component.css'
})
export class MovieOppComponent implements OnInit {
  movie: Movie = new Movie();
  editing: boolean = false;
  constructor(private movieComp: MovieComponent, private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}




// add(form: NgForm){
//   this.movieComp.addMovie(this.movie);
//   this.router.navigate(['/add']);
// }

