import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.database';

@Component({
  selector: 'app-pokemon-stats',
  imports: [],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.css'
})
export class PokemonStatsComponent {
  pokemons : Array<Pokemon>;
  constructor(private pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
  }
}
