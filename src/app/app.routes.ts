import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonPokedexComponent } from './pokemon-pokedex/pokemon-pokedex.component';

export const routes: Routes = [
    {
        path: "pokedex/pokemon/:pokemon-name", component: PokemonPokedexComponent
    },
    { 
        path: "", pathMatch: "full", redirectTo: 'pokedex/pokemon/Bulbasaur', 
    },
    { 
        path: "**", component: PageNotFoundComponent
    }
];
