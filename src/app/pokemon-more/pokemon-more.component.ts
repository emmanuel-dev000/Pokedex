import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.database';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-more',
  imports: [],
  templateUrl: './pokemon-more.component.html',
  styleUrl: './pokemon-more.component.css'
})
export class PokemonMoreComponent {
  @Input({required: true}) pokemons : Array<Pokemon> = [];
}
