import { PokemonService } from './../../_services/pokemon.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  /* public pokemons: Pokemon[] = [
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', 
      number: 1,
      name: 'Bulbasaur',
      types:[
        Type.Grass, 
        Type.Poison,
      ],
     },
     
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png', 
      number: 2,
      name: 'Ivysaur',
      types:[
        Type.Grass, 
        Type.Poison,
      ],
     },
     
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png', 
      number: 3,
      name: 'Venusaur',
      types:[
        Type.Grass, 
        Type.Poison,
      ],
     },
     
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', 
      number: 4,
      name: 'Venusaur',
      types:[
        Type.Fire 
      ],
     },
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png', 
      number: 5,
      name: 'Charmeleon',
      types:[
        Type.Fire 
      ],
     },
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png', 
      number: 6,
      name: 'Charizard',
      types:[
        Type.Fire 
      ],
     },
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 
      number: 7,
      name: 'Squirtle',
      types:[
        Type.Fire 
      ],
     },
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png', 
      number: 8,
      name: 'Wartortle',
      types:[
        Type.Fire 
      ],
     },
     {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png', 
      number: 9,
      name: 'Blastoise',
      types:[
        Type.Water 
      ],
     },

   ];
*/
constructor(
  public pokemonService: PokemonService,
) {
}
}