import { Component, Input } from '@angular/core';
import { getPokemonNumber, Pokemon } from '../_model/Pokemon';
import {getPokemonImage} from '../_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent{
 
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;

 }
