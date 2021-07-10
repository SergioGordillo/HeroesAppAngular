
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes(): Observable <Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }
}
