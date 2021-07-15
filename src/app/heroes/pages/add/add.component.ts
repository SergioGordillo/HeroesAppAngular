import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    mat-icon{margin-right: 5px; margin-bottom: 5px;}
    img{width: 100%; border-radius: 5px;}
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
    private router:Router,
    private snackBar:MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('edit')){
      return ;
    }

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
        .subscribe( resp =>{
          this.hero=resp;
          this.showSnackbar("The hero was updated");
        });

    } else {
      this.heroesService.addHero(this.hero)
      .subscribe(hero=>{
        this.router.navigate(['/heroes', hero.id]);
        this.showSnackbar("The hero was created")
      });
    }

  }

  delete(){

   const dialog=this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.hero
    });

    dialog.afterClosed().subscribe(resp=>{
      if(resp){
        if(this.hero.id){
          this.heroesService.deleteHero(this.hero.id)
          .subscribe(resp=>{
            this.router.navigate(['/heroes']);
            this.showSnackbar("The hero was deleted")
          })
        }
      }
    })
  }

  showSnackbar(message:string):void{
    this.snackBar.open(message, 'Close', {
      duration: 2500
    })
  }

}
