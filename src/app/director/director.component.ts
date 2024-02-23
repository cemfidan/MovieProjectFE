import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Director } from './director';
import { DirectorService } from './director.service';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})
export class DirectorComponent implements OnInit {
  directors: Director[] = [];
  constructor(private directorService: DirectorService) { }

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors() {
    this.directorService.getDirectors().subscribe(response => {
      this.directors = response
    })
  }
}
