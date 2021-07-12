import { Component, Input} from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
      min-height: 85vh;
    }
`]
})
export class HeroCardComponent {

  @Input() hero!:Hero; 

  constructor() { }


}