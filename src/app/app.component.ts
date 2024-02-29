import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { RouterOutlet } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ToastrModule, MovieComponent, NavbarComponent]
})
export class AppComponent {
  title = 'MovieProjectFE';
}
