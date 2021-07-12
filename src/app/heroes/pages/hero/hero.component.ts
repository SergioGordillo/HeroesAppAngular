import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap} from 'rxjs/operators';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroComponent implements OnInit {

  hero!:Hero; 

  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id})=> this.heroesService.getHeroById(id))
      )
      .subscribe(hero=>this.hero=hero); 
  }

  comeBack(){
    this.router.navigate(['heroes/list'])
  }


}

