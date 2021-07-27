import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:1, name: 'Robocop'},
      {id:2, name: 'Barman'},
      {id:3, name:'El Barto'},
      {id:4, name:'Mr Spazzaneve'},
      {id:5, name:'Pepsi man'},
      {id:6, name:'Matteo Slavini'},
        {id:7, name: 'Gina Cande'},
      {id: 8, name: 'Bigo Lino'},
        {id: 9, name: 'Mikyll Mouse'},
        {id: 10, name: 'Sgrodolo'},
          { id: 11, name: 'Dr Cafonio' },
        { id: 12, name: 'Mario Meroslav' },
        { id: 13, name: 'Bomba Anarchica' },
        { id: 14, name: 'Celerino' },
        { id: 15, name: 'Barbara dURSS' },
        { id: 16, name: 'Thisgust' },
        { id: 17, name: 'Prof. Perfidius' },
        { id: 18, name: 'Crash' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}