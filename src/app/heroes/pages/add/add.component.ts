import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    mat-icon{margin-right: 5px; margin-bottom: 5px}
  `]
})
export class AddComponent implements OnInit {

  publishers=[
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    }
  ]

  hero:Hero={
    superhero: " ",
    publisher: Publisher.DCComics,
    alter_ego: " ",
    first_appearance: " ",
    characters: " ",
    alt_img: " "

  };

  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.heroesService.getHeroById(id))
      )
      .subscribe(hero=>this.hero=hero); 
  }

  save(){
    if (this.hero.superhero.trim().length===0){
      return ;
    }

    if (this.hero.id) {
        this.heroesService.updateHero(this.hero)
        .subscribe();

    } else {
      this.heroesService.addHero(this.hero)
      .subscribe(hero=>{
        this.router.navigate(['/heroes', hero.id])
      });
    }

  }

}
