import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from './actor';
import { ActorService } from './actor.service';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent implements OnInit {
  actors: Actor[] = [];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.actorService.getActors().subscribe(response => {
      this.actors = response;
    })
  }

}
