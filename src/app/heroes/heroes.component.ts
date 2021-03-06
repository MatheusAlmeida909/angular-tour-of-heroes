import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES
  selectedHero?: Hero = {
    id: 1,
    name:'Igniter'
  }
  onSelect(hero:Hero){
     this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
