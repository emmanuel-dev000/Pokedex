export interface Pokemon {
    id: number;
    name: string;
    img: string;
    type: Type;
    bio: string;
    evolutions: Array<string>;
}

export enum Type {
    Electric = "Electric",
    Water = "Water",
    Grass = "Grass",
    Fire = "Fire",
}

export const Pokemons = 
[
    {
        id: 0,
        name: "Pikachu",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
        type: Type.Electric,
        bio: "A yellow rat.",
        evolutions: [
            "Pichu", "Raichu",
        ]
    },
    
    {
        id: 1,
        name: "Charmander",
        img: "",
        type: Type.Fire,
        bio: "An orange house lizard.",
        evolutions: [
            "Charmeleon", "Charizard",
        ]
    },
    
    {
        id: 2,
        name: "Bulbasaur",
        img: "",
        type: Type.Grass,
        bio: "A green pig.",
        evolutions: [
            "Ivysaur", "Venusaur",
        ]
    },
    
    {
        id: 3,
        name: "Squirtle",
        img: "",
        type: Type.Water,
        bio: "A blue turtle.",
        evolutions: [
            "Worturtle", "Blastoise",
        ]
    },
];