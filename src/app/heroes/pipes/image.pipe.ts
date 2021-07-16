import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero): string {

    console.log("heroid", hero.id);
    console.log("heroaltimg", hero.alt_img);

    if(hero.id==undefined && hero.alt_img== " "){
      return 'assets/no-image.png';
    } else if (hero.alt_img) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${hero.id}.jpg`;
    }
  }

}
