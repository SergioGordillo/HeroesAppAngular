import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  
    .container{margin: 10px;}

  `]
})
export class HomeComponent implements OnInit {

  auth: Auth = this.showAuthAtHome;

  get showAuthAtHome(){
    return this.authService.showUser; 
  }

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.showAuthAtHome;
  }

  logout(){
    localStorage.removeItem("id");
    this.router.navigate(['./auth'])
  }

}
