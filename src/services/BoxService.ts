import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import type { PokemonResumo } from '../models/Pokemon';

export class BoxService {
    private readonly filePath = join(process.cwd(), 'pc_box.json');

    async carregar(): Promise<PokemonResumo[]> {
        try {
            const conteudo = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(conteudo) as PokemonResumo[];
        } catch {
            await this.salvar([]);
            return [];
        }
    }

    async salvar(pokemons: PokemonResumo[]): Promise<void> {
        await fs.writeFile(
            this.filePath,
            JSON.stringify(pokemons, null, 2),
            'utf-8'
        );
    }
}