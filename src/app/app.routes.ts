import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';
import { MovieOppComponent } from './movie/movie-opp/movie-opp.component';

export const routes: Routes = [
    // { path: 'movies', component: MovieComponent },
    // { path: 'actors', component: ActorComponent },
    // { path: 'directors', component: DirectorComponent },
    // {path:'', redirectTo:'/movies', pathMatch:'full'}
    {path:'/add/:mode', component:MovieOppComponent},
    {path:'/add/:mode/:id', component:MovieOppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
