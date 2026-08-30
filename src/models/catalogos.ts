import type { PokemonResumo } from './Pokemon';

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some(p => p.id === pokemon.id);
        
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.name} já está no catálogo.`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log('[AVISO] Catálogo vazio.');
            return;
        }

        console.log('\n📋 Catálogo atual:');
        this.pokemons.forEach(p => {
            console.log(
                `#${p.id} - ${p.name} | Tipos: ${p.types.join(', ')} | ` +
                `HP: ${p.hp} | ATK: ${p.attack} | DEF: ${p.defense}`
            );
        });
    }

    remover(id: number): void {
        const existe = this.pokemons.some(p => p.id === id);
        
        if (!existe) {
            console.log('[AVISO] Nenhum Pokémon encontrado com esse ID.');
            return;
        }

        this.pokemons = this.pokemons.filter(p => p.id !== id);
        console.log('[OK] Pokémon removido do catálogo.');
    }

    getTodos(): PokemonResumo[] {
        return this.pokemons;
    }
}