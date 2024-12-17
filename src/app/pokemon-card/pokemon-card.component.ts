import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon, Pokemons } from '../pokemon.database';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  pokemons : Array<Pokemon> = [];
  
  constructor(private pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
  }
}
