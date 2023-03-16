import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const movies = [ 
      {id: 1, name:"movie 1", description:"güzel", imageUrl:"1.jpeg"},
      {id: 2, name:"movie 2", description:"asdfg", imageUrl:"2.jpeg"},
      {id: 3, name:"movie 3", description:"noice", imageUrl:"3.jpeg"},
      {id: 4, name:"movie 4", description:"noice", imageUrl:"4.jpeg"},
      {id: 5, name:"movie 5", description:"noice", imageUrl:"5.jpeg"}
  ];
  return {movies};
  }
  constructor() { }
}
