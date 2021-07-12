
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable <Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id:string):Observable<Hero>{
    const url=`${this.baseUrl}/heroes/${id}`
    return this.http.get<Hero>(url);
  }
}
