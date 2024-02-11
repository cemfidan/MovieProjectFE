import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MovieComponent, NavbarComponent]
})
export class AppComponent {
  title = 'MovieProjectFE';
}
