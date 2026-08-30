import type { PokemonResumo, PokemonApiResponse } from '../models/Pokemon';

export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
      const url = `${this.baseUrl}/${nomeOuId.toLowerCase()}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        console.log('[ERRO] Pokémon não encontrado.');
        return null;
      }

      const data: PokemonApiResponse = await response.json();
      
      return this.mapearParaResumo(data);
    } catch (error) {
      console.log('[ERRO] Não foi possível buscar o Pokémon.');
      return null;
    }
  }

  private mapearParaResumo(data: PokemonApiResponse): PokemonResumo {
    const tipos = data.types.map(t => t.type.name);
    const hp = data.stats.find(s => s.stat.name === 'hp')?.base_stat || 0;
    const attack = data.stats.find(s => s.stat.name === 'attack')?.base_stat || 0;
    const defense = data.stats.find(s => s.stat.name === 'defense')?.base_stat || 0;

    return {
      id: data.id,
      name: data.name,
      types: tipos,
      hp,
      attack,
      defense
    };
  }
}