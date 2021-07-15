
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
  private limit:number=6;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable <Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id:string):Observable<Hero>{
    const url=`${this.baseUrl}/heroes/${id}`
    return this.http.get<Hero>(url);
  }

  getSuggestions(term:string):Observable<Hero[]>{
    const url=`${this.baseUrl}/heroes/?q=${term}&_limit=${this.limit}`
    return this.http.get<Hero[]>(url);
  }

  addHero(hero:Hero):Observable<Hero>{
    const url=`${this.baseUrl}/heroes`
    return this.http.post<Hero>(url, hero); 
  }

  updateHero(hero:Hero):Observable<Hero>{
    const url=`${this.baseUrl}/heroes/${hero.id}`
    return this.http.put<Hero>(url, hero); 
  }

  deleteHero(id:string):Observable<any>{
    const url=`${this.baseUrl}/heroes/${id}`
    return this.http.delete<Hero>(url); 
  }
}
