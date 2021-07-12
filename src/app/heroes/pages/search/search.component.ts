import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  term: string=""; 
  heroes: Hero[]= [];

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  search(term:string){
    this.heroesService.getSuggestions(this.term)
      .subscribe(heroes=>{this.heroes=heroes});
  }

  optionSelected(event:MatAutocompleteSelectedEvent){
    const heroId: string =event.option.value;
    // const hero: Hero = this.heroesService.getHeroById(heroId).subscribe (hero=>hero=hero); 
    // console.log(hero);

   
   

  }

}
