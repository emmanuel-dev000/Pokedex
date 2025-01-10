import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.database';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-pokedex',
  imports: [RouterLink],
  templateUrl: './pokemon-pokedex.component.html',
  styleUrl: './pokemon-pokedex.component.css'
})
export class PokemonPokedexComponent implements OnInit {
  pokemons : Array<Pokemon> = [];
  activePokemon : Pokemon | undefined; 
  constructor(private pokemonService : PokemonService, private activatedRoute : ActivatedRoute) {
    this.pokemons = pokemonService.pokemons;
    this.activePokemon = this.pokemons[0];
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => {
      const pokemon = x.get("pokemon-name");
      this.activePokemon = this.pokemons.find(p => p.name == pokemon);
    });
  }
}
