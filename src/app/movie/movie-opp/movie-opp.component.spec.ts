import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOppComponent } from './movie-opp.component';

describe('MovieOppComponent', () => {
  let component: MovieOppComponent;
  let fixture: ComponentFixture<MovieOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieOppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
