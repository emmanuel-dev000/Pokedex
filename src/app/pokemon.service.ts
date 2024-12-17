import { Injectable } from '@angular/core';
import { Pokemon, Pokemons } from './pokemon.database';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Array<Pokemon> = Pokemons;
}
