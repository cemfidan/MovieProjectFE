import { Component } from '@angular/core';
import { MovieComponent } from './components/movie/movie.component';  
import { NavbarComponent } from './components/navbar/navbar.component'; 

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
