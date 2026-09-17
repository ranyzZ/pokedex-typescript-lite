import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { PokeApiService } from '../services/PokeApiService';
import { BoxService } from '../services/BoxService';
import type { PokemonResumo } from '../models/Pokemon';

export class TerminalController {
    private pokeApi = new PokeApiService();
    private boxService = new BoxService();
    private catalogo: PokemonResumo[] = [];
    private rl = readline.createInterface({ input, output });

    async iniciar(): Promise<void> {
        this.catalogo = await this.boxService.carregar();

        let sair = false;
        while (!sair) {
            console.log('\n===== POKÉDEX TYPESCRIPT LITE =====');
            console.log('1 - Buscar e adicionar Pokémon');
            console.log('2 - Listar catálogo');
            console.log('3 - Remover Pokémon por ID');
            console.log('0 - Sair');
            const opcao = await this.rl.question('Escolha uma opção: ');

            switch (opcao.trim()) {
                case '1':
                    await this.buscarEAdicionar();
                    break;
                case '2':
                    this.listar();
                    break;
                case '3':
                    await this.remover();
                    break;
                case '0':
                    sair = true;
                    break;
                default:
                    console.log('[AVISO] Opção inválida.');
            }
        }

        this.rl.close();
        console.log('Até logo!');
    }

    private async buscarEAdicionar(): Promise<void> {
        const entrada = await this.rl.question('Digite o nome ou ID do Pokémon: ');
        const pokemon = await this.pokeApi.buscarPokemon(entrada.trim());

        if (!pokemon) return;

        const jaExiste = this.catalogo.some(p => p.id === pokemon.id);
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.name} já está no catálogo.`);
            return;
        }

        this.catalogo.push(pokemon);
        await this.boxService.salvar(this.catalogo);
        console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`);
    }

    private listar(): void {
        if (this.catalogo.length === 0) {
            console.log('[AVISO] Catálogo vazio.');
            return;
        }

        console.log('\nCatálogo atual:');
        this.catalogo.forEach(p => {
            console.log(
                `#${p.id} - ${p.name} | Tipos: ${p.types.join(', ')} | ` +
                `HP: ${p.hp} | ATK: ${p.attack} | DEF: ${p.defense}`
            );
        });
    }

    private async remover(): Promise<void> {
        const entrada = await this.rl.question('Digite o ID do Pokémon: ');
        const id = Number(entrada.trim());

        const existe = this.catalogo.some(p => p.id === id);
        if (!existe) {
            console.log('[AVISO] Nenhum Pokémon encontrado com esse ID.');
            return;
        }

        this.catalogo = this.catalogo.filter(p => p.id !== id);
        await this.boxService.salvar(this.catalogo);
        console.log('[OK] Pokémon removido do catálogo.');
    }
}