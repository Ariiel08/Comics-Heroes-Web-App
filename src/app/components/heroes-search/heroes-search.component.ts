import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {
  sentencia: string;
  heroes: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.sentencia = params['id'];
      this.heroes = this._heroesService.buscarHeroes(params['id']);
    })
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe',idx]);
  }
}
