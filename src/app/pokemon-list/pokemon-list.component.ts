import { Component} from '@angular/core';
import { Type } from '../_model/Type';
import { Pokemon } from '../_model/Pokemon';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
   public pokemons: Pokemon[] = [
     {
      image: 'https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png', 
      number: 1,
      name: 'Bulbasaur',
      types:[
        Type.Grass, 
        Type.Poison,
      ],
     },
   ];
}
