import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonPokedexComponent } from './pokemon-pokedex/pokemon-pokedex.component';

export const routes: Routes = [
    {
        path: "pokedex", component: PokemonPokedexComponent
    },
    { 
        path: "", pathMatch: "full", redirectTo: 'pokedex', 
    },
    { 
        path: "**", component: PageNotFoundComponent
    }
];
