import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.database';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-more',
  imports: [],
  templateUrl: './pokemon-more.component.html',
  styleUrl: './pokemon-more.component.css'
})
export class PokemonMoreComponent {
  pokemons : Array<Pokemon> = [];
  
  constructor(private pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
  }
}
