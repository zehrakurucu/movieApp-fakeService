import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  movies: Movie[]=[];
  movieLenght: number;
  
  constructor(private movieService: MovieService){}
  
  ngOnInit() :void{
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
    .subscribe(movies=> {
      this.movies=movies.slice(0,4);
      this.movieLenght=movies.length;
    })
          
  }
}
