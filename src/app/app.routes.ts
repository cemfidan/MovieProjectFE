import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';

export const routes: Routes = [
    // {path:'', pathMatch:'full', component: MovieComponent},
    // { path: 'movies', component: MovieComponent },
    { path: "movies/add", component: MovieAddComponent },
    { path: "movies/:mode/:id", component: MovieAddComponent},
    { path : "movies/:mode/", component: MovieAddComponent}
    // { path: 'actors', component: ActorComponent },
    // { path: 'directors', component: DirectorComponent },
    // {path:'', redirectTo:'/movies', pathMatch:'full'}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
