import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { PokemonStatsComponent } from "../pokemon-stats/pokemon-stats.component";
import { PokemonMoreComponent } from "../pokemon-more/pokemon-more.component";
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.database';

@Component({
  selector: 'app-pokemon-pokedex',
  imports: [PokemonCardComponent, PokemonStatsComponent, PokemonMoreComponent],
  templateUrl: './pokemon-pokedex.component.html',
  styleUrl: './pokemon-pokedex.component.css'
})
export class PokemonPokedexComponent {
  pokemons : Array<Pokemon> = [];
  constructor(private pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
  }
}
