export interface PokemonResumo {
  id: number;
  name: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  stats: { 
    base_stat: number; 
    stat: { name: string } 
  }[];
}