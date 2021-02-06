import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  buscarHeroe(sentencia: string){
    this.router.navigate(['/heroesearch',sentencia]);
  }

}
